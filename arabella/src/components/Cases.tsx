import CaseCard from './CaseCard'
import type { CaseStudy } from '../content/cases'
import { useReveal } from '../hooks/useReveal'

interface CasesProps {
  id: string
  cases: CaseStudy[]
}

const Cases = ({ id, cases }: CasesProps) => {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section id={id} ref={sectionRef} className="py-20" aria-labelledby="cases-title">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 id="cases-title" className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Cases que comprovam performance real
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Trabalhamos lado a lado com equipes de marketing e produto para acelerar aquisição e retenção com impacto mensurável.
          </p>
        </div>
        <div className="space-y-6">
          {cases.map(study => (
            <CaseCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
