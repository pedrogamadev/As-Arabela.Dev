import { useState } from 'react';
import type { FaqItem } from '../content/faq';
import { useFaqSchema } from '../lib/seo';

interface FaqProps {
  id: string;
  items: FaqItem[];
}

const FaqSection = ({ id, items }: FaqProps) => {
  useFaqSchema(items);
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id={id} className="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p>Tire dúvidas sobre como estruturamos projetos, integrações e suporte contínuo.</p>
        </div>
        <div className="faq__list">
          {items.map((item, index) => {
            const isOpen = active === index;
            return (
              <div key={item.question} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? null : index)}
                >
                  {item.question}
                  <span aria-hidden>{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq__answer" role="region" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
