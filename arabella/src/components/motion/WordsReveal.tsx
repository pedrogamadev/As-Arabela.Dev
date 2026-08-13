import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface WordsRevealProps {
  text: string;
  className?: string;
  /** Atraso antes da primeira palavra, em segundos. */
  delay?: number;
  /** Intervalo entre palavras, em segundos. */
  stagger?: number;
  /** Índices (base 0) das palavras que recebem destaque visual. */
  highlight?: number[];
  highlightClassName?: string;
}

/**
 * Faz o texto "aparecer na tela" palavra por palavra quando entra na viewport.
 * Com `prefers-reduced-motion` o texto é renderizado direto, sem animação.
 */
const WordsReveal = ({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  highlight = [],
  highlightClassName = '',
}: WordsRevealProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const words = text.split(' ');

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span className={highlight.includes(index) ? highlightClassName : undefined}>{word}</span>{' '}
          </Fragment>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            className={`inline-block ${highlight.includes(index) ? highlightClassName : ''}`}
            initial={{ opacity: 0, y: '0.45em', filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: '0em', filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.55,
              delay: delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>{' '}
        </Fragment>
      ))}
    </span>
  );
};

export default WordsReveal;
