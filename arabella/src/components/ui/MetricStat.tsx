import { cn } from '../../lib/utils';

interface MetricStatProps {
  value: string;
  label: string;
  /** `accent` usa âmbar sobre fundo escuro (case); `plain` herda a cor do texto. */
  tone?: 'plain' | 'accent';
  size?: 'md' | 'lg';
  className?: string;
}

/** Número em serifada com rótulo em sans-serif abaixo. */
const MetricStat = ({ value, label, tone = 'plain', size = 'md', className }: MetricStatProps) => (
  <div className={cn('flex flex-col gap-1', className)}>
    <span
      className={cn(
        'font-display font-normal leading-none',
        size === 'lg' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl',
        tone === 'accent' ? 'text-accent' : 'text-ink',
      )}
    >
      {value}
    </span>
    <span
      className={cn(
        'text-sm leading-snug',
        tone === 'accent' ? 'text-ink-inverse-muted' : 'text-ink-muted',
      )}
    >
      {label}
    </span>
  </div>
);

export default MetricStat;
