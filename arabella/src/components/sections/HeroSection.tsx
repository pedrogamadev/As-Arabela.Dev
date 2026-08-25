import type { CallToAction, HeroContent } from '../../content/types';
import CtaButton from '../ui/CtaButton';
import Eyebrow from '../ui/Eyebrow';
import HeroComposition from '../ui/HeroComposition';
import SectionShell from '../ui/SectionShell';

interface HeroSectionProps {
  content: HeroContent;
  cta: CallToAction;
}

/**
 * Seção 2. Hero em duas colunas.
 *
 * O lado esquerdo contém a proposta de valor e os CTAs. O lado direito é
 * uma composição única: o mockup de notebook e celular como elemento
 * principal, com os benefícios em órbita como apoio.
 */
const HeroSection = ({ content, cta }: HeroSectionProps) => (
  <SectionShell id="topo" surface="base" className="pt-28 md:pt-32 overflow-hidden" labelledBy="hero-title">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col gap-6">
        <Eyebrow>{content.eyebrow}</Eyebrow>

        <h1
          id="hero-title"
          className="font-display text-4xl font-normal leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl lg:text-6xl"
        >
          {content.titleLead}
          {'\n'}
          <span className="relative inline-block">
            <span className="text-accent">{content.titleHighlight}</span>
            {/* Sublinhado decorativo ondulado */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,5 Q25,0 50,5 T100,5 T150,5 T200,5"
                fill="none"
                stroke="#E8A317"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="flex items-center gap-2 text-base leading-relaxed text-ink-muted md:text-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-positive">
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {content.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-2">
          <CtaButton label={cta.label} href={cta.href} section="hero" variant="primary" />
          <a
            href={`#${content.secondaryLink.targetId}`}
            className="text-sm text-ink-muted underline underline-offset-4 transition-colors hover:text-ink"
          >
            {content.secondaryLink.label}
          </a>
        </div>
      </div>

      <HeroComposition showcase={content.showcase} highlights={content.highlights} />
    </div>
  </SectionShell>
);

export default HeroSection;
