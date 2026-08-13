import type { SocialProofMetric } from '../../content/types';
import SectionShell from '../ui/SectionShell';

interface SocialProofBarProps {
  metrics: SocialProofMetric[];
}

/** Seção 3. Faixa de altura reduzida, fundo alternado, divisores verticais. */
const SocialProofBar = ({ metrics }: SocialProofBarProps) => (
  <SectionShell surface="alt" padding="tight" as="aside">
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0">
      {metrics.map((metric, index) => (
        <li
          key={metric.label}
          className={
            index > 0
              ? 'flex items-baseline gap-3 sm:justify-center sm:border-l sm:border-hairline sm:px-6'
              : 'flex items-baseline gap-3 sm:justify-center sm:px-6'
          }
        >
          <span className="font-display text-3xl font-normal leading-none text-ink">
            {metric.value}
          </span>
          <span className="text-sm text-ink-muted">{metric.label}</span>
        </li>
      ))}
    </ul>
  </SectionShell>
);

export default SocialProofBar;
