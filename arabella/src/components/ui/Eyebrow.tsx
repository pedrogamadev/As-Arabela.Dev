import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

interface EyebrowProps extends PropsWithChildren {
  /** Sobre fundo escuro o cinza quente perde contraste; usa o tom claro. */
  onDark?: boolean;
  className?: string;
}

/** Label de seção: sans-serif, reduzida, caixa alta, letter-spacing aberto. */
const Eyebrow = ({ onDark = false, className, children }: EyebrowProps) => (
  <p
    className={cn(
      'text-xs font-medium uppercase tracking-eyebrow',
      onDark ? 'text-ink-inverse-muted' : 'text-ink-muted',
      className,
    )}
  >
    {children}
  </p>
);

export default Eyebrow;
