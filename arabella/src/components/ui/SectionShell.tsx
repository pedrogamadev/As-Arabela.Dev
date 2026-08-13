import type { ElementType, PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

export type SectionSurface = 'base' | 'alt' | 'dark' | 'accent';
export type SectionPadding = 'none' | 'tight' | 'default';

interface SectionShellProps extends PropsWithChildren {
  id?: string;
  /** Fundo da faixa. A alternância entre seções é o que cria o ritmo vertical. */
  surface?: SectionSurface;
  padding?: SectionPadding;
  /** Remove o container central, para faixas que ocupam a largura total. */
  bleed?: boolean;
  as?: ElementType;
  labelledBy?: string;
  className?: string;
}

const surfaceClass: Record<SectionSurface, string> = {
  base: 'bg-surface-base text-ink',
  alt: 'bg-surface-alt text-ink',
  dark: 'bg-surface-dark text-ink-inverse',
  accent: 'bg-accent text-ink',
};

const paddingClass: Record<SectionPadding, string> = {
  none: '',
  tight: 'py-8 md:py-10',
  default: 'py-16 md:py-20 lg:py-24',
};

/** Faixa horizontal com controle de fundo e espaçamento vertical. */
const SectionShell = ({
  id,
  surface = 'base',
  padding = 'default',
  bleed = false,
  as: Tag = 'section',
  labelledBy,
  className,
  children,
}: SectionShellProps) => (
  <Tag
    id={id}
    aria-labelledby={labelledBy}
    className={cn(surfaceClass[surface], paddingClass[padding], className)}
  >
    {bleed ? children : <div className="mx-auto w-full max-w-shell px-5 md:px-8">{children}</div>}
  </Tag>
);

export default SectionShell;
