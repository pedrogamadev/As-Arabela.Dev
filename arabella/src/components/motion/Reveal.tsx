import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos — útil para escalonar listas (index * 0.08). */
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  /** Combina um leve zoom com o deslocamento. */
  scale?: number;
  /** Margem do viewport para disparar antes do elemento aparecer por completo. */
  margin?: string;
  once?: boolean;
  /** Repassado ao wrapper para preservar semântica (ex.: `listitem`). */
  role?: string;
}

const offsetFor = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
    case 'none':
      return { x: 0, y: 0 };
    case 'up':
    default:
      return { x: 0, y: distance };
  }
};

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Respeita `prefers-reduced-motion`: nesse caso o conteúdo já nasce visível.
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  distance = 26,
  direction = 'up',
  scale,
  margin = '-80px',
  once = true,
  role,
}: RevealProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} role={role}>
        {children}
      </div>
    );
  }

  const offset = offsetFor(direction, distance);

  return (
    <motion.div
      className={className}
      role={role}
      initial={{ opacity: 0, ...offset, ...(scale ? { scale } : {}) }}
      whileInView={{ opacity: 1, x: 0, y: 0, ...(scale ? { scale: 1 } : {}) }}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
