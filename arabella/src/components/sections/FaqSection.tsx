import { useState } from 'react';
import type { FaqContent } from '../../content/types';
import { trackFaqOpen } from '../../lib/analytics';
import FaqItem from '../ui/FaqItem';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface FaqSectionProps {
  content: FaqContent;
}

/** Seção 12. Apenas um item aberto por vez. */
const FaqSection = ({ content }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number, question: string) => {
    setOpenIndex(current => {
      const next = current === index ? null : index;
      if (next !== null) {
        trackFaqOpen(question);
      }
      return next;
    });
  };

  return (
    <SectionShell id="faq" surface="base" labelledBy="faq-title">
      <SectionHeading id="faq-title" size="md">
        {content.heading}
      </SectionHeading>

      <div className="mt-8 border-t border-hairline">
        {content.entries.map((entry, index) => (
          <FaqItem
            key={entry.question}
            entry={entry}
            isOpen={openIndex === index}
            onToggle={() => toggle(index, entry.question)}
          />
        ))}
      </div>
    </SectionShell>
  );
};

export default FaqSection;
