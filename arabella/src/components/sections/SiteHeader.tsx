import { useEffect, useState } from 'react';
import type { CallToAction, HeaderContent } from '../../content/types';
import { cn } from '../../lib/utils';
import CtaButton from '../ui/CtaButton';

interface SiteHeaderProps {
  content: HeaderContent;
  cta: CallToAction;
  /**
   * Prefixo das âncoras. Vazio na home (rolagem na própria página) e `/`
   * nas rotas secundárias, onde a âncora precisa voltar para a raiz.
   */
  anchorPrefix?: string;
}

/** Seção 1. Fixo no topo, ganha fundo sólido e hairline ao rolar. */
const SiteHeader = ({ content, cta, anchorPrefix = '' }: SiteHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-200',
        isScrolled ? 'border-b border-hairline bg-surface-base' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-shell items-center justify-between gap-6 px-5 md:px-8">
        <a href={`${anchorPrefix}#topo`} className="flex items-center gap-2">
          <img
            src={content.logoSrc}
            alt={content.brandName}
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="sr-only">{content.brandName}</span>
        </a>

        <nav aria-label={content.navLabel} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {content.nav.map(item => (
              <li key={item.targetId}>
                <a
                  href={`${anchorPrefix}#${item.targetId}`}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <p className="hidden items-center gap-2 text-sm text-ink-muted lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-positive" aria-hidden="true" />
            {content.availability}
          </p>
          <CtaButton
            label={cta.label}
            href={cta.href}
            section="header"
            variant="primary"
            size="sm"
          />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
