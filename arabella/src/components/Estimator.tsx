import { useMemo, useState } from 'react';
import { estimateProjeto, type EstimatorInput, type EstimatorResult } from '../features/estimator/logic';
import LeadForm from './LeadForm';

interface EstimatorSectionProps {
  id: string;
}

type StepId =
  | 'tipoProjeto'
  | 'paginas'
  | 'blog'
  | 'integracoes'
  | 'prazo'
  | 'investimento';

const initialState: EstimatorInput = {
  tipoProjeto: 'landing',
  paginas: 3,
  blog: true,
  integracoes: 'crm',
  prazo: 'equilibrado',
  investimento: 'crescimento',
};

const EstimatorSection = ({ id }: EstimatorSectionProps) => {
  const [step, setStep] = useState<number>(0);
  const [input, setInput] = useState<EstimatorInput>(initialState);
  const [result, setResult] = useState<EstimatorResult | null>(null);

  const steps: StepId[] = useMemo(
    () => ['tipoProjeto', 'paginas', 'blog', 'integracoes', 'prazo', 'investimento'],
    [],
  );

  const currentStep = steps[step];

  const goTo = (direction: 'prev' | 'next') => {
    setStep(current => {
      if (direction === 'prev') {
        setResult(null);
        return Math.max(0, current - 1);
      }

      if (current === steps.length - 1) {
        const estimate = estimateProjeto(input);
        setResult(estimate);
        return current;
      }

      return Math.min(steps.length - 1, current + 1);
    });
  };

  const updateInput = <Key extends keyof EstimatorInput>(
    field: Key,
    value: EstimatorInput[Key],
  ) => {
    setResult(null);
    setInput(current => ({ ...current, [field]: value }));
  };

  return (
    <section id={id} className="estimator" aria-labelledby="estimator-title">
      <div className="container estimator__container">
        <div className="section-heading">
          <h2 id="estimator-title">Calcule o investimento ideal para seu próximo site</h2>
          <p>
            Em poucos cliques você entende faixa de investimento, prazo estimado e como nosso time
            pode acelerar sua próxima entrega digital.
          </p>
        </div>

        <div className="estimator__layout">
          <div className="estimator__steps" aria-live="polite">
            <ol className="estimator__progress">
              {steps.map((item, index) => (
                <li key={item} className={index === step ? 'is-active' : index < step ? 'is-complete' : ''}>
                  <span>{index + 1}</span>
                  <small>{getStepLabel(item)}</small>
                </li>
              ))}
            </ol>

            <EstimatorStepContent
              step={currentStep}
              input={input}
              onChange={updateInput}
            />

            <div className="estimator__actions">
              <button
                type="button"
                className="button button--ghost"
                onClick={() => goTo('prev')}
                disabled={step === 0}
              >
                Voltar
              </button>
              <button
                type="button"
                className="button button--primary"
                onClick={() => goTo('next')}
              >
                {step === steps.length - 1 ? 'Calcular estimativa' : 'Continuar'}
              </button>
            </div>
          </div>

          <aside className="estimator__summary" aria-live="polite">
            {result ? (
              <EstimatorSummary result={result} input={input} />
            ) : (
              <div className="estimator__placeholder">
                <h3>Seu resumo aparecerá aqui</h3>
                <p>
                  Responda às perguntas para ver a faixa de investimento estimada e prazo sugerido
                  para entrega.
                </p>
              </div>
            )}
            {result && <LeadForm />}
          </aside>
        </div>
      </div>
    </section>
  );
};

interface EstimatorStepContentProps {
  step: StepId;
  input: EstimatorInput;
  onChange: <Key extends keyof EstimatorInput>(field: Key, value: EstimatorInput[Key]) => void;
}

const EstimatorStepContent = ({ step, input, onChange }: EstimatorStepContentProps) => {
  switch (step) {
    case 'tipoProjeto':
      return (
        <div className="estimator__options">
          {[
            { value: 'landing', label: 'Landing page focada em conversão', helper: 'Campanhas, lançamentos, pré-venda.' },
            { value: 'ecommerce', label: 'E-commerce enxuto', helper: 'Catálogo com até 150 SKUs e integrações essenciais.' },
            { value: 'institucional', label: 'Portal institucional', helper: 'Conteúdo editorial, blog e páginas estáticas.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={`estimator__option ${input.tipoProjeto === option.value ? 'is-selected' : ''}`}
              onClick={() => onChange('tipoProjeto', option.value as EstimatorInput['tipoProjeto'])}
            >
              <strong>{option.label}</strong>
              <span>{option.helper}</span>
            </button>
          ))}
        </div>
      );
    case 'paginas':
      return (
        <div className="estimator__field">
          <label htmlFor="estimator-pages">Quantas páginas chave?</label>
          <input
            id="estimator-pages"
            type="range"
            min={1}
            max={12}
            value={input.paginas}
            onChange={event => onChange('paginas', Number(event.target.value))}
          />
          <div className="estimator__value">{input.paginas} páginas principais</div>
        </div>
      );
    case 'blog':
      return (
        <div className="estimator__options">
          {[
            { value: true, label: 'Sim, precisamos de blog ativo', helper: 'Calendário editorial e SEO recorrente.' },
            { value: false, label: 'Não, conteúdo institucional apenas', helper: 'Páginas estáticas e materiais ricos.' },
          ].map(option => (
            <button
              key={String(option.value)}
              type="button"
              className={`estimator__option ${input.blog === option.value ? 'is-selected' : ''}`}
              onClick={() => onChange('blog', option.value)}
            >
              <strong>{option.label}</strong>
              <span>{option.helper}</span>
            </button>
          ))}
        </div>
      );
    case 'integracoes':
      return (
        <div className="estimator__options">
          {[
            { value: 'nenhuma', label: 'Sem integrações extras', helper: 'Analytics básico e formulários nativos.' },
            { value: 'crm', label: 'CRM / Automação', helper: 'HubSpot, RD Station, ActiveCampaign, etc.' },
            { value: 'pagamentos', label: 'Pagamentos/assinaturas', helper: 'Checkout, gateways ou plataforma de curso.' },
            { value: 'erp', label: 'ERP / sistemas legados', helper: 'Integrações customizadas com APIs internas.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={`estimator__option ${input.integracoes === option.value ? 'is-selected' : ''}`}
              onClick={() => onChange('integracoes', option.value as EstimatorInput['integracoes'])}
            >
              <strong>{option.label}</strong>
              <span>{option.helper}</span>
            </button>
          ))}
        </div>
      );
    case 'prazo':
      return (
        <div className="estimator__options">
          {[
            { value: 'rapido', label: 'Precisamos lançar em até 30 dias', helper: 'Squad dedicado e roadmap acelerado.' },
            { value: 'equilibrado', label: 'Podemos seguir no ritmo recomendado', helper: '5-7 semanas com validações semanais.' },
            { value: 'calmo', label: 'Timeline mais confortável', helper: 'Entrega com foco em governança e transferência.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={`estimator__option ${input.prazo === option.value ? 'is-selected' : ''}`}
              onClick={() => onChange('prazo', option.value as EstimatorInput['prazo'])}
            >
              <strong>{option.label}</strong>
              <span>{option.helper}</span>
            </button>
          ))}
        </div>
      );
    case 'investimento':
    default:
      return (
        <div className="estimator__options">
          {[
            { value: 'essencial', label: 'Essencial', helper: 'Foco no necessário para validar ideia.' },
            { value: 'crescimento', label: 'Crescimento', helper: 'Equilíbrio entre escala e custo.' },
            { value: 'dominio', label: 'Domínio', helper: 'Experiência premium com diferenciais avançados.' },
          ].map(option => (
            <button
              key={option.value}
              type="button"
              className={`estimator__option ${input.investimento === option.value ? 'is-selected' : ''}`}
              onClick={() => onChange('investimento', option.value as EstimatorInput['investimento'])}
            >
              <strong>{option.label}</strong>
              <span>{option.helper}</span>
            </button>
          ))}
        </div>
      );
  }
};

const EstimatorSummary = ({ result, input }: { result: EstimatorResult; input: EstimatorInput }) => (
  <div className="estimator__result">
    <h3>Resultado preliminar</h3>
    <p>
      Para um projeto <strong>{getStepLabel(input.tipoProjeto)}</strong> com {input.paginas} páginas,
      {input.blog ? ' blog ativo,' : ' sem blog,'} integrações <strong>{getStepLabel(input.integracoes)}</strong>
      {' '}e prazo <strong>{getStepLabel(input.prazo)}</strong>.
    </p>
    <dl>
      <div>
        <dt>Investimento estimado</dt>
        <dd>
          R$ {result.min.toLocaleString('pt-BR')} — R$ {result.max.toLocaleString('pt-BR')}
        </dd>
      </div>
      <div>
        <dt>Prazo sugerido</dt>
        <dd>{result.etaWeeks} semanas</dd>
      </div>
    </dl>
    <p className="estimator__note">
      Valores e prazos podem variar conforme integrações adicionais e volume de conteúdo. Vamos
      detalhar tudo em uma call rápida.
    </p>
  </div>
);

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
  };

  return dictionary[String(value)] ?? String(value);
};

export default EstimatorSection;
