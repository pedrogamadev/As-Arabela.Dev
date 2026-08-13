import { cn } from '../../lib/utils';
import { trackCtaClick, type CtaSection } from '../../lib/analytics';

export type CtaVariant = 'primary' | 'outline' | 'dark';

interface CtaButtonProps {
  label: string;
  href: string;
  /** Identifica a origem no evento `cta_click`. */
  section: CtaSection;
  variant?: CtaVariant;
  /** Ocupa toda a largura do container — usado nos cards de plano. */
  block?: boolean;
  size?: 'sm' | 'md';
  /** Disparado depois do evento de CTA. Usado pelos cards de plano. */
  onClick?: () => void;
  className?: string;
}

const variantClass: Record<CtaVariant, string> = {
  primary: 'bg-accent text-ink border border-accent hover:bg-accent-pressed hover:border-accent-pressed',
  outline: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ink-inverse',
  dark: 'bg-surface-dark text-ink-inverse border border-surface-dark hover:bg-ink hover:border-ink',
};

const sizeClass = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
} as const;

/**
 * Único elemento de conversão da página. O texto vem sempre do mesmo dado
 * (`content/cta.ts`) — não passe rótulos literais aqui.
 */
const CtaButton = ({
  label,
  href,
  section,
  variant = 'primary',
  block = false,
  size = 'md',
  onClick,
  className,
}: CtaButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => {
      trackCtaClick(section);
      onClick?.();
    }}
    className={cn(
      'inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-200',
      variantClass[variant],
      sizeClass[size],
      block && 'w-full',
      className,
    )}
  >
    {label}
  </a>
);

export default CtaButton;
