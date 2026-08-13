import type { CaseContent } from '../../content/types';
import BrowserMockup from '../ui/BrowserMockup';
import Eyebrow from '../ui/Eyebrow';
import MetricStat from '../ui/MetricStat';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface CaseSectionProps {
  content: CaseContent;
}

/** Seção 7. Fundo escuro em largura total. */
const CaseSection = ({ content }: CaseSectionProps) => (
  <SectionShell surface="dark" labelledBy="case-title">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-5">
        <Eyebrow onDark>{content.eyebrow}</Eyebrow>

        <SectionHeading id="case-title" size="md" onDark>
          {content.client}
        </SectionHeading>

        <p className="max-w-lg text-base leading-relaxed text-ink-inverse-muted">
          {content.context}
        </p>

        <hr className="my-2 border-0 border-t border-hairline-dark" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.metrics.map(metric => (
            <MetricStat
              key={metric.label}
              value={metric.value}
              label={metric.label}
              tone="accent"
              size="lg"
            />
          ))}
        </div>
      </div>

      <BrowserMockup tone="dark" />
    </div>
  </SectionShell>
);

export default CaseSection;
