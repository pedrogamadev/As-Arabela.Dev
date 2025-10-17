import BeforeAfterSlider from './BeforeAfterSlider'
import type { CaseStudy } from '../content/cases'

const CaseCard = ({ study }: { study: CaseStudy }) => (
  <article className="glass shadow-soft grid gap-8 rounded-2xl p-8 md:grid-cols-2 md:items-center">
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <BeforeAfterSlider
        before={study.beforeImage}
        after={study.afterImage}
        labelBefore={`Antes do projeto ${study.name}`}
        labelAfter={`Depois do projeto ${study.name}`}
      />
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-white">{study.name}</h3>
      <p className="text-sm text-white/70">{study.description}</p>
      <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
        {study.results.map(metric => (
          <li key={metric.label} className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">{metric.label}</span>
            <strong className="text-lg font-semibold text-white">{metric.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  </article>
)

export default CaseCard
