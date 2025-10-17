import BeforeAfterSlider from './BeforeAfterSlider';
import type { CaseStudy } from '../content/cases';

const CaseCard = ({ study }: { study: CaseStudy }) => (
  <article className="case-card">
    <div className="case-card__media">
      <BeforeAfterSlider
        before={study.beforeImage}
        after={study.afterImage}
        labelBefore={`Antes do projeto ${study.name}`}
        labelAfter={`Depois do projeto ${study.name}`}
      />
    </div>
    <div className="case-card__body">
      <h3>{study.name}</h3>
      <p>{study.description}</p>
      <ul className="case-card__metrics">
        {study.results.map(metric => (
          <li key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default CaseCard;
