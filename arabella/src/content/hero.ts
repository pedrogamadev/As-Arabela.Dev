import logoAtlas from '../assets/logo-atlas.svg';
import logoVerde from '../assets/logo-verde.svg';
import logoFaro from '../assets/logo-faro.svg';
import logoOrbe from '../assets/logo-orbe.svg';
import logoNave from '../assets/logo-nave.svg';

export interface HeroCta {
  label: string;
  action: 'scroll' | 'modal';
  target: string;
}

export interface HeroContent {
  kicker: string;
  title: string;
  subtitle: string;
}

export interface LogoItem {
  name: string;
  src: string;
}

export interface KpiItem {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export const heroContent: HeroContent = {
  kicker: 'Estúdio web focado em performance',
  title: 'Lançamos sites que convertem em semanas, não em meses.',
  subtitle:
    'A Arabella.dev projeta, desenvolve e otimiza experiências digitais em português que carregam rápido, posicionam no Google e geram leads previsíveis.',
};

export const heroCtas: HeroCta[] = [
  { label: 'Fazer estimativa em 2 minutos', action: 'scroll', target: 'estimator' },
  { label: 'Agendar chamada', action: 'modal', target: 'scheduler-modal' },
];

export const heroLogos: LogoItem[] = [
  { name: 'Atlas Educação', src: logoAtlas },
  { name: 'Verde Labs', src: logoVerde },
  { name: 'Faro Digital', src: logoFaro },
  { name: 'Orbe Ventures', src: logoOrbe },
  { name: 'Nave Retail', src: logoNave },
];

export const heroKpis: KpiItem[] = [
  {
    label: 'Tempo médio de lançamento',
    value: 5,
    suffix: ' sem.',
    description: 'Da ideia ao go-live com SEO técnico e analytics configurados.',
  },
  {
    label: 'Média de ganho em conversão',
    value: 32,
    suffix: '%',
    description: 'Comparado a versões anteriores ou templates não otimizados.',
  },
  {
    label: 'Satisfação NPS',
    value: 73,
    description: 'Clientes ativos recomendariam a Arabella.dev para parceiros.',
  },
];
