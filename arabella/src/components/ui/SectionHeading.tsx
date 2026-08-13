import type { PropsWithChildren } from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps extends PropsWithChildren {
  id?: string;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'lg' | 'md' | 'sm';
  onDark?: boolean;
  className?: string;
}

const sizeClass = {
  lg: 'text-4xl md:text-5xl lg:text-6xl',
  md: 'text-3xl md:text-4xl',
  sm: 'text-2xl md:text-3xl',
} as const;

/** Título de seção em serifada. Peso sempre regular — nunca bold. */
const SectionHeading = ({
  id,
  as: Tag = 'h2',
  size = 'md',
  onDark = false,
  className,
  children,
}: SectionHeadingProps) => (
  <Tag
    id={id}
    className={cn(
      'font-display font-normal leading-[1.08] tracking-[-0.01em]',
      sizeClass[size],
      onDark ? 'text-ink-inverse' : 'text-ink',
      className,
    )}
  >
    {children}
  </Tag>
);

export default SectionHeading;
