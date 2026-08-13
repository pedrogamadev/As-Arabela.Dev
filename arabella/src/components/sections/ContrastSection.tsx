import type { ContrastContent } from '../../content/types';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface ContrastSectionProps {
  content: ContrastContent;
}

/** Seção 4. Dois painéis lado a lado com fundos distintos. */
const ContrastSection = ({ content }: ContrastSectionProps) => (
  <SectionShell surface="base" labelledBy="contraste-title">
    <SectionHeading id="contraste-title" size="md" className="max-w-2xl">
      {content.heading}
    </SectionHeading>

    <div className="mt-10 grid gap-px border border-hairline bg-hairline md:grid-cols-2">
      <div className="bg-surface-alt p-6 md:p-8">
        <h3 className="text-sm font-medium uppercase tracking-eyebrow text-ink-muted">
          {content.common.title}
        </h3>
        <ul className="mt-6 flex flex-col gap-4">
          {content.common.items.map(item => (
            <li key={item} className="flex gap-3 text-sm leading-snug text-ink-muted md:text-base">
              <span aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-surface-raised p-6 md:p-8">
        <h3 className="text-sm font-medium uppercase tracking-eyebrow text-ink">
          {content.delivered.title}
        </h3>
        <ul className="mt-6 flex flex-col gap-4">
          {content.delivered.items.map(item => (
            <li key={item} className="flex gap-3 text-sm leading-snug text-ink md:text-base">
              <span className="mt-1.5 h-3 w-0.5 flex-none bg-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionShell>
);

export default ContrastSection;
