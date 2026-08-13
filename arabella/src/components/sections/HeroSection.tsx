import type { CallToAction, HeroContent } from '../../content/types';
import BrowserMockup from '../ui/BrowserMockup';
import CtaButton from '../ui/CtaButton';
import Eyebrow from '../ui/Eyebrow';
import SectionShell from '../ui/SectionShell';

interface HeroSectionProps {
  content: HeroContent;
  cta: CallToAction;
}

/** Seção 2. Duas colunas em desktop, empilhado em mobile. */
const HeroSection = ({ content, cta }: HeroSectionProps) => (
  <SectionShell id="topo" surface="base" className="pt-28 md:pt-32" labelledBy="hero-title">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-6">
        <Eyebrow>{content.eyebrow}</Eyebrow>

        <h1
          id="hero-title"
          className="font-display text-4xl font-normal leading-[1.08] tracking-[-0.01em] text-ink md:text-5xl lg:text-6xl"
        >
          {content.titleLead}
          <mark className="bg-accent text-ink">{content.titleHighlight}</mark>
          {content.titleTrail}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
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

      <div className="relative pb-10 pr-4 lg:pb-12">
        <BrowserMockup tone="light" />
        <div className="absolute bottom-0 right-0 border border-hairline bg-surface-raised px-5 py-4">
          <p className="text-xs uppercase tracking-eyebrow text-ink-muted">
            {content.mockupCard.label}
          </p>
          <p className="mt-1 font-display text-2xl font-normal leading-none text-ink">
            {content.mockupCard.value}
          </p>
        </div>
      </div>
    </div>
  </SectionShell>
);

export default HeroSection;
