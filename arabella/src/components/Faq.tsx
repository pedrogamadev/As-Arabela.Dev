import { useState } from 'react'
import type { FaqItem } from '../content/faq'
import { useFaqSchema } from '../lib/seo'
import { useReveal } from '../hooks/useReveal'

interface FaqProps {
  id: string
  items: FaqItem[]
}

const FaqSection = ({ id, items }: FaqProps) => {
  useFaqSchema(items)
  const sectionRef = useReveal<HTMLElement>()
  const [active, setActive] = useState<number | null>(0)

  return (
    <section id={id} ref={sectionRef} className="py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 id="faq-title" className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Tire dúvidas sobre como estruturamos projetos, integrações e suporte contínuo.
          </p>
        </div>
        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--card))]/70">
          {items.map((item, index) => {
            const isOpen = active === index
            return (
              <div key={item.question} className="px-6 py-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 text-left text-white"
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? null : index)}
                >
                  <span className="text-base font-medium">{item.question}</span>
                  <span
                    aria-hidden
                    data-open={isOpen}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-sm text-white/70 transition-transform duration-200 data-[open=true]:rotate-45"
                  >
                    +
                  </span>
                </button>
                <div className="pt-4 text-sm text-white/70" role="region" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
