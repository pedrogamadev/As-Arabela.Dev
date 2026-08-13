import type { CallToAction, FinalCtaContent } from '../../content/types';
import CtaButton from '../ui/CtaButton';
import SectionShell from '../ui/SectionShell';

interface FinalCtaSectionProps {
  content: FinalCtaContent;
  cta: CallToAction;
}

/** Seção 13. Faixa de largura total em âmbar sólido. */
const FinalCtaSection = ({ content, cta }: FinalCtaSectionProps) => (
  <SectionShell surface="accent" padding="tight" labelledBy="fechamento-title">
    <div className="flex flex-col items-start justify-between gap-6 py-6 md:flex-row md:items-center">
      <div className="flex flex-col gap-1">
        <h2
          id="fechamento-title"
          className="font-display text-2xl font-normal leading-tight text-ink md:text-3xl"
        >
          {content.heading}
        </h2>
        <p className="text-sm text-ink">{content.subtitle}</p>
      </div>

      <CtaButton label={cta.label} href={cta.href} section="final" variant="dark" />
    </div>
  </SectionShell>
);

export default FinalCtaSection;
