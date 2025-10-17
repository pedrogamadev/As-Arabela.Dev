import { useEffect, useState } from 'react'
import type { ServiceItem } from '../content/services'
import { useReveal } from '../hooks/useReveal'

interface ServicesProps {
  id: string
  services: ServiceItem[]
}

const Services = ({ id, services }: ServicesProps) => {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id={id} ref={sectionRef} className="py-20" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 id="services-title" className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Serviços sob medida para acelerar seu crescimento
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Projetamos cada pacote para equilibrar velocidade, autonomia e governança. Nada de templates genéricos.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service }: { service: ServiceItem }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty('overflow')
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.body.style.setProperty('overflow', 'hidden')
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.removeProperty('overflow')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const Icon = () => {
    switch (service.icon) {
      case 'landing':
        return (
          <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12 fill-current text-white/60">
            <rect x="4" y="8" width="40" height="28" rx="6" />
            <rect x="10" y="14" width="28" height="4" rx="2" />
            <rect x="10" y="22" width="16" height="4" rx="2" />
            <rect x="10" y="30" width="20" height="4" rx="2" />
          </svg>
        )
      case 'ecommerce':
        return (
          <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12 fill-current text-white/60">
            <path d="M10 10h28l-2.5 18H12.5L10 10Z" />
            <circle cx="19" cy="36" r="3" />
            <circle cx="29" cy="36" r="3" />
          </svg>
        )
      case 'ongoing':
      default:
        return (
          <svg viewBox="0 0 48 48" aria-hidden className="h-12 w-12 fill-none stroke-current text-white/60" strokeWidth="3">
            <path d="M24 8a16 16 0 1 0 11.32 27.32l-4.24-4.24" />
            <path d="M24 8v10l7 3" />
          </svg>
        )
    }
  }

  return (
    <article className="glass shadow-soft relative flex flex-col gap-4 rounded-2xl p-8 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
        <Icon />
      </div>
      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
      <p className="text-sm text-white/70">{service.description}</p>
      <ul className="space-y-2 text-sm text-white/60">
        {service.bullets.map(point => (
          <li key={point} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-500" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="pill glass mt-2 w-fit text-sm font-semibold text-white/80 transition hover:text-white"
        onClick={() => setOpen(true)}
      >
        O que está incluso?
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`Inclusões de ${service.title}`}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="glass shadow-soft relative z-10 w-full max-w-lg space-y-4 rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white">O que está incluso</h4>
              <button type="button" onClick={() => setOpen(false)} className="text-xl text-white/70 hover:text-white" aria-label="Fechar modal">
                ✕
              </button>
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              {service.whatsIncluded.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="pill bg-blue-500 text-sm font-medium text-white shadow-soft transition hover:bg-blue-400"
              onClick={() => setOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </article>
  )
}

export default Services
