import CaseCard from './CaseCard';
import type { CaseStudy } from '../content/cases';

interface CasesProps {
  id: string;
  cases: CaseStudy[];
}

const Cases = ({ id, cases }: CasesProps) => (
  <section id={id} className="cases" aria-labelledby="cases-title">
    <div className="container">
      <div className="section-heading">
        <h2 id="cases-title">Cases que comprovam performance real</h2>
        <p>
          Trabalhamos lado a lado com equipes de marketing e produto para acelerar aquisição e
          retenção com impacto mensurável.
        </p>
      </div>
      <div className="cases__grid">
        {cases.map(study => (
          <CaseCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  </section>
);

export default Cases;
