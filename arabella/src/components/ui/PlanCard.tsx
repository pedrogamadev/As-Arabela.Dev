import type { CallToAction, Plan } from '../../content/types';
import { trackPlanClick } from '../../lib/analytics';
import { cn } from '../../lib/utils';
import CtaButton from './CtaButton';

interface PlanCardProps {
  plan: Plan;
  cta: CallToAction;
  /** Rótulo do bloco de exclusões, vindo da camada de conteúdo. */
  excludesLabel: string;
}

const PlanCard = ({ plan, cta, excludesLabel }: PlanCardProps) => (
  <article
    className={cn(
      'relative flex h-full flex-col bg-surface-raised p-6 md:p-8',
      plan.featured
        ? 'border-2 border-ink lg:-translate-y-4'
        : 'border border-hairline',
    )}
  >
    {plan.badge ? (
      <span className="absolute right-0 top-0 bg-accent px-3 py-1 text-xs font-medium uppercase tracking-eyebrow text-ink">
        {plan.badge}
      </span>
    ) : null}

    <h3 className="text-sm font-medium uppercase tracking-eyebrow text-ink-muted">{plan.name}</h3>

    <p className="mt-4 font-display text-4xl font-normal leading-none text-ink md:text-5xl">
      {plan.price}
    </p>
    <p className="mt-2 text-sm text-ink-muted">{plan.deadline}</p>

    <ul className="mt-6 flex flex-col gap-3">
      {plan.includes.map(item => (
        <li key={item} className="flex gap-3 text-sm leading-snug text-ink">
          <span className="mt-1.5 h-3 w-0.5 flex-none bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {plan.excludes.length > 0 ? (
      <>
        <hr className="my-6 border-0 border-t border-hairline" />
        <p className="text-xs font-medium uppercase tracking-eyebrow text-ink-muted">
          {excludesLabel}
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {plan.excludes.map(item => (
            <li key={item} className="flex gap-3 text-sm leading-snug text-ink-muted">
              <span aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ) : null}

    <div className="mt-auto pt-8">
      <CtaButton
        label={cta.label}
        href={cta.href}
        section="plans"
        variant={plan.featured ? 'primary' : 'outline'}
        block
        onClick={() => trackPlanClick(plan.id)}
      />
    </div>
  </article>
);

export default PlanCard;
