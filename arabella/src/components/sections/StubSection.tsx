import type { CallToAction } from '../../content/types';
import CtaButton from '../ui/CtaButton';
import Eyebrow from '../ui/Eyebrow';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface StubSectionProps {
  eyebrow: string;
  heading: string;
  paragraph: string;
  cta: CallToAction;
}

/**
 * Bloco de placeholder das rotas secundárias.
 *
 * Existe para que /sistemas e /parceiros respondam 200 — elas são
 * referenciadas em três pontos da landing page e não podem dar 404.
 */
const StubSection = ({ eyebrow, heading, paragraph, cta }: StubSectionProps) => (
  <SectionShell id="topo" surface="base" className="pt-28 md:pt-32" labelledBy="stub-title">
    <div className="flex max-w-2xl flex-col gap-5 border-t border-hairline pt-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionHeading id="stub-title" as="h1" size="lg">
        {heading}
      </SectionHeading>
      <p className="text-base leading-relaxed text-ink-muted md:text-lg">{paragraph}</p>
      <div className="pt-2">
        <CtaButton label={cta.label} href={cta.href} section="hero" variant="primary" />
      </div>
    </div>
  </SectionShell>
);

export default StubSection;
