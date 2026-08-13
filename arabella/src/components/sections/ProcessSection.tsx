import type { ProcessContent } from '../../content/types';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';
import StepItem from '../ui/StepItem';

interface ProcessSectionProps {
  content: ProcessContent;
}

/** Seção 5. Quatro colunas separadas por divisores verticais. */
const ProcessSection = ({ content }: ProcessSectionProps) => (
  <SectionShell id="como-funciona" surface="alt" labelledBy="processo-title">
    <div className="flex flex-col gap-3 border-b border-hairline pb-8 md:flex-row md:items-baseline md:justify-between">
      <SectionHeading id="processo-title" size="md">
        {content.heading}
      </SectionHeading>
      <p className="text-sm text-ink-muted">{content.note}</p>
    </div>

    <ol className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-0 lg:grid-cols-4">
      {content.steps.map((step, index) => (
        <li
          key={step.ordinal}
          className={
            index > 0
              ? 'md:border-l md:border-hairline md:pl-8 lg:pl-8'
              : 'md:pr-8 lg:pr-8'
          }
        >
          <StepItem step={step} />
        </li>
      ))}
    </ol>
  </SectionShell>
);

export default ProcessSection;
