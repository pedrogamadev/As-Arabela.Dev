import { useId } from 'react';
import type { FaqEntry } from '../../content/types';

interface FaqItemProps {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Item do acordeão.
 *
 * É um `<button>` nativo: Tab alcança, Enter e Espaço acionam, sem
 * handler de teclado próprio. O painel é removido da árvore quando
 * fechado, então o conteúdo oculto não recebe foco.
 */
const FaqItem = ({ entry, isOpen, onToggle }: FaqItemProps) => {
  const id = useId();
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-b border-hairline">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 py-5 text-left"
        >
          <span className="text-base font-medium text-ink md:text-lg">{entry.question}</span>
          <span
            aria-hidden="true"
            className="mt-1 flex-none select-none text-xl leading-none text-accent"
          >
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </h3>

      {isOpen ? (
        <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-6 pr-10">
          <p className="text-sm leading-relaxed text-ink-muted md:text-base">{entry.answer}</p>
        </div>
      ) : null}
    </div>
  );
};

export default FaqItem;
