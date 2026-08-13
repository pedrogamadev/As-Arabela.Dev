import { useEffect, useState } from 'react';
import type { CallToAction } from '../content/types';
import { cn } from '../lib/utils';
import CtaButton from './ui/CtaButton';

interface MobileCtaBarProps {
  cta: CallToAction;
  /** Elemento cujo fim libera a barra — normalmente o hero. */
  revealAfterId: string;
  /** Elemento que a barra nunca pode sobrepor. */
  hideOverId: string;
}

/**
 * Barra fixa na base abaixo de 768px.
 *
 * Aparece só depois que o usuário ultrapassa o hero e some quando o
 * footer entra em tela. É complementar: o CTA do hero e o dos planos já
 * estão no fluxo, então nada essencial depende dela.
 */
const MobileCtaBar = ({ cta, revealAfterId, hideOverId }: MobileCtaBarProps) => {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(revealAfterId);
    const footer = document.getElementById(hideOverId);

    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0 },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => setIsOverFooter(entry.isIntersecting),
      { threshold: 0 },
    );

    if (hero) {
      heroObserver.observe(hero);
    }
    if (footer) {
      footerObserver.observe(footer);
    }

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [revealAfterId, hideOverId]);

  const isVisible = isPastHero && !isOverFooter;

  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-surface-base p-3 transition-opacity duration-200 md:hidden',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <CtaButton
        label={cta.label}
        href={cta.href}
        section="mobile_bar"
        variant="primary"
        block
        className={isVisible ? undefined : 'pointer-events-none'}
      />
    </div>
  );
};

export default MobileCtaBar;
