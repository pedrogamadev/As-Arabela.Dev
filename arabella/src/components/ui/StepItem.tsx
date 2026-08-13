import type { ProcessStep } from '../../content/types';

interface StepItemProps {
  step: ProcessStep;
}

/** Etapa do processo: ordinal em serifada âmbar e prazo alinhado à direita. */
const StepItem = ({ step }: StepItemProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-baseline justify-between gap-3">
      <span className="font-display text-4xl font-normal leading-none text-accent">
        {step.ordinal}
      </span>
      <span className="text-xs uppercase tracking-eyebrow text-ink-muted">{step.timeframe}</span>
    </div>
    <h3 className="text-base font-medium text-ink">{step.title}</h3>
    <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
  </div>
);

export default StepItem;
