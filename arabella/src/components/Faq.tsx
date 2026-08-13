import { faqItems } from '../content/faq';
import Reveal from './motion/Reveal';

const Faq = () => (
  <section id="faq" className="faq" aria-labelledby="faq-title">
    <div className="container">
      <Reveal>
        <header className="section-heading">
          <p className="section-kicker">Dúvidas frequentes</p>
          <h2 id="faq-title">FAQ</h2>
        </header>
      </Reveal>

      <div className="faq__grid" role="list">
        {faqItems.map((item, index) => (
          <Reveal
            key={item.question}
            className="faq__item-wrapper"
            role="listitem"
            delay={(index % 2) * 0.08}
            distance={22}
          >
            <details className="faq-item" open={index === 0}>
              <summary>
                <div className="faq-item__question">
                  <span className="faq-item__badge" aria-hidden="true">?</span>
                  <span>{item.question}</span>
                </div>
                <span className="faq-item__icon" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;
