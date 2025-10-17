import type { ProcessStep } from '../content/process'
import { useReveal } from '../hooks/useReveal'

interface ProcessProps {
  id: string
  steps: ProcessStep[]
}

const Process = ({ id, steps }: ProcessProps) => {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id={id} ref={sectionRef} className="py-20" aria-labelledby="process-title">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 id="process-title" className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Processo enxuto para ir do briefing ao go-live
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Transparência em cada etapa, com entregas semanais e quadro compartilhado com seu time.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map(step => (
            <article
              key={step.id}
              className="glass shadow-soft flex flex-col gap-4 rounded-2xl p-8 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <span className="pill inline-flex w-fit items-center gap-2 border border-white/10 bg-white/10 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                {step.duration}
              </span>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
