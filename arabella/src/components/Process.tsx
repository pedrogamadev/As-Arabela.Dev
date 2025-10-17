import { useEffect, useRef } from 'react';
import type { ProcessStep } from '../content/process';

interface ProcessProps {
  id: string;
  steps: ProcessStep[];
}

const Process = ({ id, steps }: ProcessProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll('[data-step]');
    if (!nodes?.length) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 },
    );

    nodes.forEach(node => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="process-title">Processo enxuto para ir do briefing ao go-live</h2>
          <p>Transparência em cada etapa, com entregas semanais e quadro compartilhado com seu time.</p>
        </div>
        <div className="process__grid" ref={containerRef}>
          {steps.map(step => (
            <article className="process__step" data-step={step.id} key={step.id}>
              <span className="process__badge">{step.duration}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
