import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../app/providers'
import { useReveal } from '../hooks/useReveal'

interface TestimonialItem {
  id: string
  quote: string
  name: string
  role: string
  highlight: string
}

const testimonials: TestimonialItem[] = [
  {
    id: 'atlas',
    quote:
      'A Arabella entrou como parceira estratégica. Em 6 semanas tínhamos um site novo, integrações com CRM e dashboards de performance prontos.',
    name: 'Marina Lopes',
    role: 'Head de Marketing, Atlas Educação',
    highlight: '+42% leads orgânicos',
  },
  {
    id: 'verde',
    quote:
      'O processo foi transparente do início ao fim. Crescemos a taxa de conversão mobile e ganhamos autonomia para testar novas campanhas.',
    name: 'Eduardo Viana',
    role: 'Growth Manager, Verde Labs',
    highlight: '-35% custo por aquisição',
  },
  {
    id: 'faro',
    quote:
      'Finalmente temos uma stack rápida, com SEO técnico impecável e time disponível para evoluir continuamente.',
    name: 'Juliana Mota',
    role: 'CMO, Faro Digital',
    highlight: 'NPS 78',
  },
]

const Testimonials = () => {
  const sectionRef = useReveal<HTMLElement>()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion || paused) {
      return
    }

    const id = window.setInterval(() => {
      setActive(current => (current + 1) % testimonials.length)
    }, 6000)

    return () => window.clearInterval(id)
  }, [paused, prefersReducedMotion])

  return (
    <section ref={sectionRef} className="py-20" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 id="testimonials-title" className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Clientes que escalaram com a Arabella.dev
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Feedback direto de quem apostou em performance digital centrada no usuário.
          </p>
        </div>
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[rgb(var(--card))]/80 p-10 shadow-soft"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {testimonials.map((item, index) => (
            <article
              key={item.id}
              id={`testimonial-${item.id}`}
              className={`space-y-6 transition-all duration-500 ${
                index === active
                  ? 'relative opacity-100'
                  : 'pointer-events-none absolute inset-0 opacity-0'
              }`}
              aria-hidden={index !== active}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300/80">{item.highlight}</p>
              <blockquote className="space-y-4 text-xl text-white/80 sm:text-2xl">
                <p>“{item.quote}”</p>
              </blockquote>
              <footer className="flex flex-col text-sm text-white/60">
                <strong className="text-base font-semibold text-white">{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </article>
          ))}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Depoimentos">
            {testimonials.map((item, index) => (
              <button
                type="button"
                key={item.id}
                role="tab"
                aria-selected={index === active}
                aria-controls={`testimonial-${item.id}`}
                className={`h-3 w-10 rounded-full transition ${
                  index === active ? 'bg-blue-500' : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => setActive(index)}
              >
                <span className="sr-only">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
