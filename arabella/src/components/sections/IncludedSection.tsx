import type { IncludedContent } from '../../content/types';
import FeatureCell from '../ui/FeatureCell';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface IncludedSectionProps {
  content: IncludedContent;
}

/**
 * Seção 6. Grid de seis células com divisores hairline e sem sombra.
 * A faixa de integrações vive dentro do mesmo container.
 */
const IncludedSection = ({ content }: IncludedSectionProps) => (
  <SectionShell surface="base" labelledBy="inclusos-title">
    <SectionHeading id="inclusos-title" size="md">
      {content.heading}
    </SectionHeading>

    <div className="mt-10 border border-hairline">
      <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {content.features.map(feature => (
          <div key={feature.title} className="bg-surface-base">
            <FeatureCell feature={feature} />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-hairline p-6 sm:flex-row sm:items-center sm:gap-6 md:px-8">
        <span className="flex-none text-xs font-medium uppercase tracking-eyebrow text-ink-muted">
          {content.integrations.label}
        </span>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {content.integrations.items.map(item => (
            <li key={item} className="text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionShell>
);

export default IncludedSection;
