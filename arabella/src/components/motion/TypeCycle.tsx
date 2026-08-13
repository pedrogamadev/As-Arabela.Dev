import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface TypeCycleProps {
  lines: string[];
  className?: string;
  cursorClassName?: string;
  /** ms por caractere ao digitar. */
  typeSpeed?: number;
  /** ms por caractere ao apagar. */
  deleteSpeed?: number;
  /** ms que a frase completa permanece na tela. */
  holdDuration?: number;
}

type Phase = 'typing' | 'deleting';

/**
 * Máquina de escrever que alterna entre frases.
 * Só roda quando está visível na tela e para completamente com `prefers-reduced-motion`
 * (nesse caso as frases trocam sem o efeito de digitação).
 */
const TypeCycle = ({
  lines,
  className,
  cursorClassName = '',
  typeSpeed = 34,
  deleteSpeed = 16,
  holdDuration = 2100,
}: TypeCycleProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });

  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<Phase>('typing');

  const currentLine = lines[lineIndex] ?? '';

  useEffect(() => {
    if (!isInView || lines.length === 0) {
      return undefined;
    }

    if (prefersReducedMotion) {
      const intervalId = window.setInterval(() => {
        setLineIndex(index => (index + 1) % lines.length);
      }, holdDuration + 2600);

      return () => window.clearInterval(intervalId);
    }

    if (phase === 'typing') {
      if (charCount < currentLine.length) {
        const timeoutId = window.setTimeout(() => setCharCount(count => count + 1), typeSpeed);
        return () => window.clearTimeout(timeoutId);
      }

      const timeoutId = window.setTimeout(() => setPhase('deleting'), holdDuration);
      return () => window.clearTimeout(timeoutId);
    }

    if (charCount > 0) {
      const timeoutId = window.setTimeout(() => setCharCount(count => count - 1), deleteSpeed);
      return () => window.clearTimeout(timeoutId);
    }

    const timeoutId = window.setTimeout(() => {
      setLineIndex(index => (index + 1) % lines.length);
      setPhase('typing');
    }, 320);

    return () => window.clearTimeout(timeoutId);
  }, [
    charCount,
    currentLine.length,
    deleteSpeed,
    holdDuration,
    isInView,
    lines.length,
    phase,
    prefersReducedMotion,
    typeSpeed,
  ]);

  const visibleText = prefersReducedMotion ? currentLine : currentLine.slice(0, charCount);

  const longestLine = lines.reduce((longest, line) => (line.length > longest.length ? line : longest), '');

  return (
    <span ref={containerRef} className={`relative block ${className ?? ''}`}>
      {/* Reserva a altura da frase mais longa para o layout não pular a cada troca. */}
      <span className="invisible block" aria-hidden>
        {longestLine}
      </span>
      {/* O texto animado é decorativo: leitores de tela recebem a lista completa abaixo,
          em vez de uma frase sendo redigitada caractere a caractere. */}
      <span className="absolute inset-0 flex items-center" aria-hidden>
        <span>
          {visibleText}
          {!prefersReducedMotion && (
            <span className={`ml-0.5 inline-block animate-pulse ${cursorClassName}`}>|</span>
          )}
        </span>
      </span>
      <span className="sr-only">
        {lines.map(line => (
          <span key={line}>{line} </span>
        ))}
      </span>
    </span>
  );
};

export default TypeCycle;
