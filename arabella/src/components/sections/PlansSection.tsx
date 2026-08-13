import { Link } from 'react-router-dom';
import type { CallToAction, PlansContent } from '../../content/types';
import PlanCard from '../ui/PlanCard';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface PlansSectionProps {
  content: PlansContent;
  cta: CallToAction;
}

/** Seção 10. Três cards em linha; o do meio em destaque. */
const PlansSection = ({ content, cta }: PlansSectionProps) => (
  <SectionShell id="planos" surface="base" labelledBy="planos-title">
    <div className="flex flex-col gap-3 border-b border-hairline pb-8 md:flex-row md:items-baseline md:justify-between">
      <SectionHeading id="planos-title" size="md">
        {content.heading}
      </SectionHeading>
      <p className="text-sm text-ink-muted">{content.note}</p>
    </div>

    <div className="mt-10 grid items-stretch gap-6 lg:mt-14 lg:grid-cols-3">
      {content.plans.map(plan => (
        <PlanCard
          key={plan.id}
          plan={plan}
          cta={cta}
          excludesLabel={content.excludesLabel}
        />
      ))}
    </div>

    <div className="mt-10 flex flex-col gap-2">
      <p className="text-sm text-ink-muted">
        {content.footnotes.systems.lead}
        <Link
          to={content.footnotes.systems.href}
          className="text-ink underline underline-offset-4"
        >
          {content.footnotes.systems.linkLabel}
        </Link>
        {content.footnotes.systems.trail}
      </p>
      <p className="text-sm text-ink-muted">{content.footnotes.maintenance}</p>
    </div>
  </SectionShell>
);

export default PlansSection;
