import type { GuaranteeContent } from '../../content/types';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface GuaranteeSectionProps {
  content: GuaranteeContent;
}

/** Seção 11. Bloco único com fundo alternado e quatro itens em colunas. */
const GuaranteeSection = ({ content }: GuaranteeSectionProps) => (
  <SectionShell surface="alt" labelledBy="garantia-title">
    <SectionHeading id="garantia-title" size="sm">
      {content.heading}
    </SectionHeading>

    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {content.items.map(item => (
        <div key={item.title} className="flex flex-col gap-2">
          <h3 className="text-base font-medium text-ink">{item.title}</h3>
          <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default GuaranteeSection;
