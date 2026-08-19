import type { SocialProofMetric } from '../../content/types';
import SectionShell from '../ui/SectionShell';

interface SocialProofBarProps {
  metrics: SocialProofMetric[];
}

/** Mapeamento de ícone: cada key renderiza um SVG inline acessível. */
const IconMap: Record<string, JSX.Element> = {
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14.5" y1="4" x2="9.5" y2="20" />
    </svg>
  ),
  refresh: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  ),
  speed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M7 10l3 3 7-7" />
    </svg>
  ),
};

/**
 * Seção 3. Faixa de prova social com ícones, 4 colunas em desktop.
 * Estilo refinado com ícone SVG + valor em destaque + label secundário.
 */
const SocialProofBar = ({ metrics }: SocialProofBarProps) => (
  <SectionShell surface="alt" padding="tight" as="aside">
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
      {metrics.map((metric, index) => (
        <li
          key={metric.label}
          className={
            index > 0
              ? 'flex items-center gap-3 sm:justify-center sm:border-l sm:border-hairline sm:px-4'
              : 'flex items-center gap-3 sm:justify-center sm:px-4'
          }
        >
          {/* Ícone */}
          {metric.icon && (
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center text-ink-muted"
              style={{
                borderRadius: '50%',
                backgroundColor: 'rgba(26,24,21,0.04)',
              }}
              aria-hidden="true"
            >
              {IconMap[metric.icon]}
            </span>
          )}

          <div className="flex flex-col">
            <span className="font-display text-lg font-normal leading-tight text-ink md:text-xl">
              {metric.value}
            </span>
            <span className="text-xs leading-snug text-ink-muted">
              {metric.label}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </SectionShell>
);

export default SocialProofBar;
