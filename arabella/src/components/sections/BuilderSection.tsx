import type { BuilderContent } from '../../content/types';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface BuilderSectionProps {
  content: BuilderContent;
}

/**
 * Seção 8. Foto em retrato 4:5, sem borda arredondada.
 * Sem CTA — a seção existe para posicionar autoridade, não para converter.
 */
const BuilderSection = ({ content }: BuilderSectionProps) => (
  <SectionShell surface="base" labelledBy="quem-constroi-title">
    <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
      <div className="max-w-sm">
        <img
          src={content.photo.src}
          alt={content.photo.alt}
          width={content.photo.width}
          height={content.photo.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full rounded-none border border-hairline object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-4">
        <SectionHeading id="quem-constroi-title" size="sm">
          {content.heading}
        </SectionHeading>
        <div>
          <p className="text-lg text-ink">{content.name}</p>
          <p className="text-sm text-ink-muted">{content.role}</p>
        </div>
        <p className="max-w-lg text-base leading-relaxed text-ink-muted">{content.paragraph}</p>
      </div>
    </div>
  </SectionShell>
);

export default BuilderSection;
