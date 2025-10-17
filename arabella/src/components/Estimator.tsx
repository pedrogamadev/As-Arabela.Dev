import { useMemo, useState } from 'react'
import { estimateProjeto, type EstimatorInput, type EstimatorResult } from '../features/estimator/logic'
import LeadForm from './LeadForm'
import { useReveal } from '../hooks/useReveal'

interface EstimatorSectionProps {
  id: string
}

type StepId =
  | 'tipoProjeto'
  | 'paginas'
  | 'blog'
  | 'integracoes'
  | 'prazo'
  | 'investimento'

const initialState: EstimatorInput = {
  tipoProjeto: 'landing',
  paginas: 3,
  blog: true,
  integracoes: 'crm',
  prazo: 'equilibrado',
  investimento: 'crescimento',
}

const EstimatorSection = ({ id }: EstimatorSectionProps) => {
  const sectionRef = useReveal<HTMLElement>()
  const [step, setStep] = useState<number>(0)
  const [input, setInput] = useState<EstimatorInput>(initialState)
  const [result, setResult] = useState<EstimatorResult | null>(null)

  const steps: StepId[] = useMemo(
    () => ['tipoProjeto', 'paginas', 'blog', 'integracoes', 'prazo', 'investimento'],
    [],
  )

  const currentStep = steps[step]

  const goTo = (direction: 'prev' | 'next') => {
    setStep(current => {
      if (direction === 'prev') {
        setResult(null)
        return Math.max(0, current - 1)
      }

      if (current === steps.length - 1) {
        const estimate = estimateProjeto(input)
        setResult(estimate)
        return current
      }

      return Math.min(steps.length - 1, current + 1)
    })
  }

  const updateInput = <Key extends keyof EstimatorInput>(field: Key, value: EstimatorInput[Key]) => {
    setResult(null)
    setInput(current => ({ ...current, [field]: value }))
  }

  return (
    <section id={id} ref={sectionRef} className="py-20" aria-labelledby="estimator-title">
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 id="estimator-title" className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
            Calcule o investimento ideal para seu próximo site
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Em poucos cliques você entende faixa de investimento, prazo estimado e como nosso time pode acelerar sua próxima entrega digital.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-8" aria-live="polite">
            <ol className="flex flex-wrap gap-2">
              {steps.map((item, index) => (
                <li
                  key={item}
                  data-active={index === step}
                  data-complete={index < step}
                  className="pill flex items-center gap-2 border border-white/10 bg-white/5 text-xs font-semibold uppercase tracking-[0.3em] text-white/50 transition data-[active=true]:border-blue-400 data-[active=true]:bg-blue-500 data-[active=true]:text-white data-[complete=true]:border-blue-500/40 data-[complete=true]:bg-blue-500/20 data-[complete=true]:text-white"
                >
                  <span className="text-sm">{index + 1}</span>
                  <small className="text-[0.65rem]">{getStepLabel(item)}</small>
                </li>
              ))}
            </ol>

            <EstimatorStepContent step={currentStep} input={input} onChange={updateInput} />

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="pill glass text-sm font-medium text-white/80 transition hover:text-white disabled:opacity-40"
                onClick={() => goTo('prev')}
                disabled={step === 0}
              >
                Voltar
              </button>
              <button
                type="button"
                className="pill bg-blue-500 text-sm font-medium text-white shadow-soft transition hover:bg-blue-400"
                onClick={() => goTo('next')}
              >
                {step === steps.length - 1 ? 'Calcular estimativa' : 'Continuar'}
              </button>
            </div>
          </div>

          <aside className="space-y-6" aria-live="polite">
            {result ? (
              <EstimatorSummary result={result} input={input} />
            ) : (
              <div className="glass shadow-soft rounded-2xl p-6 text-sm text-white/70">
                <h3 className="text-xl font-semibold text-white">Seu resumo aparecerá aqui</h3>
                <p className="mt-2">
                  Responda às perguntas para ver a faixa de investimento estimada e prazo sugerido para entrega.
                </p>
              </div>
            )}
            {result && <LeadForm />}
          </aside>
        </div>
      </div>
    </section>
  )
}

interface EstimatorStepContentProps {
  step: StepId
  input: EstimatorInput
  onChange: <Key extends keyof EstimatorInput>(field: Key, value: EstimatorInput[Key]) => void
}

const optionButtonClasses =
  'w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-white/80 transition hover:border-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 data-[selected=true]:border-blue-400 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white'

const EstimatorStepContent = ({ step, input, onChange }: EstimatorStepContentProps) => {
  switch (step) {
    case 'tipoProjeto':
      return (
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { value: 'landing', label: 'Landing page focada em conversão', helper: 'Campanhas, lançamentos, pré-venda.' },
            { value: 'ecommerce', label: 'E-commerce enxuto', helper: 'Catálogo com até 150 SKUs e integrações essenciais.' },
            { value: 'institucional', label: 'Portal institucional', helper: 'Conteúdo editorial, blog e páginas estáticas.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={optionButtonClasses}
              data-selected={input.tipoProjeto === option.value}
              onClick={() => onChange('tipoProjeto', option.value as EstimatorInput['tipoProjeto'])}
            >
              <strong className="block text-base font-semibold">{option.label}</strong>
              <span
                className={`mt-1 block text-sm ${
                  input.tipoProjeto === option.value ? 'text-white/90' : 'text-white/60'
                }`}
              >
                {option.helper}
              </span>
            </button>
          ))}
        </div>
      )
    case 'paginas':
      return (
        <div className="space-y-4">
          <label htmlFor="estimator-pages" className="text-sm font-medium text-white">
            Quantas páginas chave?
          </label>
          <input
            id="estimator-pages"
            type="range"
            min={1}
            max={12}
            value={input.paginas}
            onChange={event => onChange('paginas', Number(event.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="pill inline-flex bg-white/10 text-sm font-semibold text-white/80">
            {input.paginas} páginas principais
          </div>
        </div>
      )
    case 'blog':
      return (
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { value: true, label: 'Sim, precisamos de blog ativo', helper: 'Calendário editorial e SEO recorrente.' },
            { value: false, label: 'Não, conteúdo institucional apenas', helper: 'Páginas estáticas e materiais ricos.' },
          ].map(option => (
            <button
              key={String(option.value)}
              type="button"
              className={optionButtonClasses}
              data-selected={input.blog === option.value}
              onClick={() => onChange('blog', option.value)}
            >
              <strong className="block text-base font-semibold">{option.label}</strong>
              <span
                className={`mt-1 block text-sm ${
                  input.blog === option.value ? 'text-white/90' : 'text-white/60'
                }`}
              >
                {option.helper}
              </span>
            </button>
          ))}
        </div>
      )
    case 'integracoes':
      return (
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { value: 'nenhuma', label: 'Sem integrações extras', helper: 'Analytics básico e formulários nativos.' },
            { value: 'crm', label: 'CRM / Automação', helper: 'HubSpot, RD Station, ActiveCampaign, etc.' },
            { value: 'pagamentos', label: 'Pagamentos/assinaturas', helper: 'Checkout, gateways ou plataforma de curso.' },
            { value: 'erp', label: 'ERP / sistemas legados', helper: 'Integrações customizadas com APIs internas.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={optionButtonClasses}
              data-selected={input.integracoes === option.value}
              onClick={() => onChange('integracoes', option.value as EstimatorInput['integracoes'])}
            >
              <strong className="block text-base font-semibold">{option.label}</strong>
              <span
                className={`mt-1 block text-sm ${
                  input.integracoes === option.value ? 'text-white/90' : 'text-white/60'
                }`}
              >
                {option.helper}
              </span>
            </button>
          ))}
        </div>
      )
    case 'prazo':
      return (
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { value: 'rapido', label: 'Precisamos lançar em até 30 dias', helper: 'Squad dedicado e roadmap acelerado.' },
            { value: 'equilibrado', label: 'Podemos seguir no ritmo recomendado', helper: '5-7 semanas com validações semanais.' },
            { value: 'calmo', label: 'Timeline mais confortável', helper: 'Entrega com foco em governança e transferência.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={optionButtonClasses}
              data-selected={input.prazo === option.value}
              onClick={() => onChange('prazo', option.value as EstimatorInput['prazo'])}
            >
              <strong className="block text-base font-semibold">{option.label}</strong>
              <span
                className={`mt-1 block text-sm ${
                  input.prazo === option.value ? 'text-white/90' : 'text-white/60'
                }`}
              >
                {option.helper}
              </span>
            </button>
          ))}
        </div>
      )
    case 'investimento':
    default:
      return (
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { value: 'essencial', label: 'Essencial', helper: 'Foco no necessário para validar ideia.' },
            { value: 'crescimento', label: 'Crescimento', helper: 'Equilíbrio entre escala e custo.' },
            { value: 'dominio', label: 'Domínio', helper: 'Experiência premium com diferenciais avançados.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={optionButtonClasses}
              data-selected={input.investimento === option.value}
              onClick={() => onChange('investimento', option.value as EstimatorInput['investimento'])}
            >
              <strong className="block text-base font-semibold">{option.label}</strong>
              <span
                className={`mt-1 block text-sm ${
                  input.investimento === option.value ? 'text-white/90' : 'text-white/60'
                }`}
              >
                {option.helper}
              </span>
            </button>
          ))}
        </div>
      )
  }
}

const EstimatorSummary = ({ result, input }: { result: EstimatorResult; input: EstimatorInput }) => (
  <div className="glass shadow-soft space-y-4 rounded-2xl p-6 text-sm text-white/70">
    <h3 className="text-xl font-semibold text-white">Resultado preliminar</h3>
    <p>
      Para um projeto <strong>{getStepLabel(input.tipoProjeto)}</strong> com {input.paginas} páginas,
      {input.blog ? ' blog ativo,' : ' sem blog,'} integrações <strong>{getStepLabel(input.integracoes)}</strong> e prazo
      {' '}<strong>{getStepLabel(input.prazo)}</strong>.
    </p>
    <dl className="space-y-3 text-base">
      <div>
        <dt className="text-white/60">Investimento estimado</dt>
        <dd className="text-lg font-semibold text-white">
          R$ {result.min.toLocaleString('pt-BR')} — R$ {result.max.toLocaleString('pt-BR')}
        </dd>
      </div>
      <div>
        <dt className="text-white/60">Prazo sugerido</dt>
        <dd className="text-lg font-semibold text-white">{result.etaWeeks} semanas</dd>
      </div>
    </dl>
    <p className="text-xs text-white/50">
      Valores e prazos podem variar conforme integrações adicionais e volume de conteúdo. Vamos detalhar tudo em uma call rápida.
    </p>
  </div>
)

const getStepLabel = (value: StepId | EstimatorInput[keyof EstimatorInput]) => {
  const dictionary: Record<string, string> = {
    tipoProjeto: 'Tipo de projeto',
    paginas: 'Páginas',
    blog: 'Blog',
    integracoes: 'Integrações',
    prazo: 'Prazo',
    investimento: 'Investimento',
    landing: 'de landing page',
    ecommerce: 'de e-commerce',
    institucional: 'institucional',
    nenhuma: 'mínimas',
    crm: 'com CRM',
    pagamentos: 'com pagamentos',
    erp: 'com ERP',
    rapido: 'acelerado',
    equilibrado: 'equilibrado',
    calmo: 'mais extenso',
    essencial: 'Essencial',
    crescimento: 'Crescimento',
    dominio: 'Domínio',
  }

  return dictionary[String(value)] ?? String(value)
}

export default EstimatorSection
