import { useEffect, useMemo, useRef, useState } from 'react';
import type { KpiItem } from '../content/hero';
import { usePrefersReducedMotion } from '../app/providers';

interface KPISectionProps {
  items: KpiItem[];
}

const KPISection = ({ items }: KPISectionProps) => (
  <section className="kpis" aria-label="Indicadores de performance">
    <div className="container kpis__grid">
      {items.map(item => (
        <KpiCard key={item.label} item={item} />
      ))}
    </div>
  </section>
);

const KpiCard = ({ item }: { item: KpiItem }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(prefersReducedMotion ? item.value : 0);
  const ref = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(item.value);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate();
          observer.current?.disconnect();
        }
      });
    });

    observer.current.observe(node);

    return () => observer.current?.disconnect();
  }, [prefersReducedMotion, item.value]);

  const animate = () => {
    const duration = 1200;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min(1, (timestamp - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(item.value * eased);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const displayValue = useMemo(() => `${value}${item.suffix ?? ''}`, [value, item]);

  return (
    <div className="kpi" ref={ref}>
      <span className="kpi__value">{displayValue}</span>
      <span className="kpi__label">{item.label}</span>
      <p className="kpi__description">{item.description}</p>
    </div>
  );
};

export default KPISection;
