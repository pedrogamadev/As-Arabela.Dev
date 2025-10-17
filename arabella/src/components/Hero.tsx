import { useEffect } from 'react'
import type { FocusEvent, MouseEvent } from 'react'
import type { HeroContent, HeroCta, LogoItem } from '../content/hero'
import { applyOpenGraphMeta } from '../lib/seo'
import { brand } from '../lib/brand'
import { useReveal } from '../hooks/useReveal'

interface HeroProps {
  id: string
  content: HeroContent
  ctas: HeroCta[]
  logos: LogoItem[]
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const Hero = ({ id, content, ctas, logos }: HeroProps) => {
  const heroRef = useReveal<HTMLElement>()

  useEffect(() => {
    applyOpenGraphMeta({
      title: `${content.title} | Arabella.dev`,
      description: content.subtitle,
      image: 'https://www.arabella.dev/og-image.png',
      url: 'https://www.arabella.dev',
      siteName: 'Arabella.dev',
    })
  }, [content])

  const handleCta = (cta: HeroCta) => {
    if (cta.action === 'scroll') {
      const target = document.getElementById(cta.target)
      target?.scrollIntoView({ behavior: 'smooth' })
    }

    if (cta.action === 'modal') {
      document.dispatchEvent(new CustomEvent('scheduler:open'))
    }
  }

  // WHY: Magnetic CTA subtly follows the cursor for delight without relying on animation packages
  const handleMagnetic = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const bounds = button.getBoundingClientRect()
    const x = clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 24, -12, 12)
    const y = clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 24, -12, 12)
    button.style.transform = `translate(${x}px, ${y}px)`
  }

  const resetMagnetic = (event: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>) => {
    event.currentTarget.style.transform = ''
  }

  return (
    <section
      id={id}
      ref={heroRef}
      className="relative overflow-hidden bg-[rgb(var(--bg))] py-24 sm:py-32"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 mesh opacity-90" aria-hidden />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: brand.gradient, filter: 'blur(140px)', opacity: 0.3 }}
        aria-hidden
      />
      <div className="noise absolute inset-0 -z-10" aria-hidden />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60">{content.kicker}</p>
          <h1 id="hero-title" className="brand-gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl">
            {content.title}
          </h1>
          <p className="text-lg text-white/70 sm:text-xl">{content.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            {ctas.map(cta => (
              <button
                key={cta.label}
                type="button"
                className={`pill text-sm font-medium shadow-soft transition-transform duration-300 focus-visible:scale-105 ${
                  cta.action === 'scroll'
                    ? 'bg-blue-500 text-white hover:bg-blue-400'
                    : 'glass text-white/80 hover:text-white'
                }`}
                onClick={() => handleCta(cta)}
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                onFocus={resetMagnetic}
                onBlur={resetMagnetic}
              >
                {cta.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.35em] text-white/40">
          {logos.map(logo => (
            <span key={logo.name} className="flex items-center gap-3">
              <img
                src={logo.src}
                alt={`Logo ${logo.name}`}
                loading="lazy"
                className="h-8 w-auto opacity-80 transition hover:opacity-100"
              />
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
