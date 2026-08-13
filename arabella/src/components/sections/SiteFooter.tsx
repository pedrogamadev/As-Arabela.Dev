import { Link } from 'react-router-dom';
import type { FooterContent } from '../../content/types';

interface SiteFooterProps {
  content: FooterContent;
  /** Ver `SiteHeader`: `/` nas rotas secundárias, vazio na home. */
  anchorPrefix?: string;
}

const isExternal = (href: string) => href.startsWith('http');
const isAnchor = (href: string) => href.startsWith('#');

/**
 * Seção 14. O `id` é o alvo do observer da barra fixa mobile — ela se
 * esconde quando o footer entra em tela, para nunca sobrepô-lo.
 */
const SiteFooter = ({ content, anchorPrefix = '' }: SiteFooterProps) => (
  <footer id="site-footer" className="bg-surface-dark text-ink-inverse">
    <div className="mx-auto w-full max-w-shell px-5 py-14 md:px-8 md:py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <p className="font-display text-xl font-normal text-ink-inverse">{content.brandName}</p>
          <p className="max-w-xs text-sm leading-relaxed text-ink-inverse-muted">
            {content.description}
          </p>
        </div>

        {content.columns.map(column => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
            <h2 className="text-xs font-medium uppercase tracking-eyebrow text-ink-inverse-muted">
              {column.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {column.links.map(link => (
                <li key={link.label}>
                  {isExternal(link.href) ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-inverse-muted transition-colors hover:text-ink-inverse"
                    >
                      {link.label}
                    </a>
                  ) : isAnchor(link.href) ? (
                    <a
                      href={`${anchorPrefix}${link.href}`}
                      className="text-sm text-ink-inverse-muted transition-colors hover:text-ink-inverse"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-ink-inverse-muted transition-colors hover:text-ink-inverse"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mt-12 border-t border-hairline-dark pt-6 pb-16 md:pb-0">
        <small className="text-xs text-ink-inverse-muted">{content.copyright}</small>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
