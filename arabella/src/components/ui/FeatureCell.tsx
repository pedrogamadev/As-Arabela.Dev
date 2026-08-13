import type { IncludedFeature } from '../../content/types';

interface FeatureCellProps {
  feature: IncludedFeature;
}

/** Célula do grid de inclusos. Sem sombra — a separação vem dos divisores do grid. */
const FeatureCell = ({ feature }: FeatureCellProps) => (
  <div className="flex flex-col gap-2 p-6 md:p-8">
    <h3 className="text-base font-medium text-ink">{feature.title}</h3>
    <p className="text-sm leading-relaxed text-ink-muted">{feature.description}</p>
  </div>
);

export default FeatureCell;
