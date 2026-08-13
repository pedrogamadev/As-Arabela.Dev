import { Link } from 'react-router-dom';
import type { CallToAction, NotFoundContent } from '../../content/types';
import CtaButton from '../ui/CtaButton';
import Eyebrow from '../ui/Eyebrow';
import NotFoundMockup from '../ui/NotFoundMockup';
import SectionShell from '../ui/SectionShell';

interface NotFoundSectionProps {
  content: NotFoundContent;
  cta: CallToAction;
}

/**
 * Corpo da rota curinga.
 *
 * Repete a estrutura do hero — duas colunas, mesma moldura, mesmo card
 * sobreposto — para que o erro pareça parte do site e não uma página de
 * servidor. A lista de destinos abaixo é a saída real do beco sem saída.
 */
const NotFoundSection = ({ content, cta }: NotFoundSectionProps) => (
  <>
    <SectionShell
      id="topo"
      surface="base"
      className="pt-28 md:pt-32"
      labelledBy="nao-encontrado-title"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <Eyebrow>{content.eyebrow}</Eyebrow>

          <h1
            id="nao-encontrado-title"
            className="font-display text-4xl font-normal leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl lg:text-6xl"
          >
            {content.titleLead}
            <mark className="bg-accent text-ink">{content.titleHighlight}</mark>
            {content.titleTrail}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            {content.paragraph}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <CtaButton label={cta.label} href={cta.href} section="not_found" variant="primary" />
            <Link
              to={content.homeLink.href}
              className="text-sm text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
            >
              {content.homeLink.label}
            </Link>
          </div>
        </div>

        <div className="relative pb-10 pr-4 lg:pb-12">
          <NotFoundMockup
            address={content.frame.address}
            codeBefore={content.frame.codeBefore}
            codeAfter={content.frame.codeAfter}
            status={content.frame.status}
          />
          <div className="absolute bottom-0 right-0 border border-hairline bg-surface-raised px-5 py-4">
            <p className="text-xs uppercase tracking-eyebrow text-ink-muted">
              {content.frameCard.label}
            </p>
            <p className="mt-1 font-display text-2xl font-normal leading-none text-ink">
              {content.frameCard.value}
            </p>
          </div>
        </div>
      </div>
    </SectionShell>

    <SectionShell surface="alt" labelledBy="sugestoes-title">
      <h2
        id="sugestoes-title"
        className="text-sm font-medium uppercase tracking-eyebrow text-ink-muted"
      >
        {content.suggestionsHeading}
      </h2>

      <ul className="mt-6 border-t border-hairline">
        {content.suggestions.map(suggestion => (
          <li key={suggestion.href} className="border-b border-hairline">
            <Link
              to={suggestion.href}
              className="group flex flex-col gap-1 py-4 transition-colors hover:text-ink sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="text-base text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-current">
                  {suggestion.label}
                </span>
                <span className="text-sm text-ink-muted">{suggestion.description}</span>
              </span>
              <span
                aria-hidden="true"
                className="flex-none text-xs uppercase tracking-eyebrow text-ink-muted transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </SectionShell>
  </>
);

export default NotFoundSection;
