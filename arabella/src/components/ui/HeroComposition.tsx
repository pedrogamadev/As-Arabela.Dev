import type { HeroHighlight, HeroHighlightIcon, HeroShowcase } from '../../content/types';
import DeviceShowcase from './DeviceShowcase';

interface HeroCompositionProps {
  showcase: HeroShowcase;
  highlights: HeroHighlight[];
}

/** Ícones da órbita. Traço de 1.5px, mesma família visual da faixa de prova social. */
const IconMap: Record<HeroHighlightIcon, JSX.Element> = {
  target: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  rocket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.79-.78.8-2.07.02-2.85a2.02 2.02 0 00-3.02-.15z" />
    </svg>
  ),
  whatsapp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.2 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.5s7.5-3.75 7.5-9.5V5.2L12 2.5 4.5 5.2V12c0 5.75 7.5 9.5 7.5 9.5z" />
      <path d="M13.6 9.5l1.9 2-1.9 2M10.4 9.5l-1.9 2 1.9 2" />
    </svg>
  ),
  seo: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 20v-5M12 20V9M19 20V4" />
    </svg>
  ),
};

/**
 * Posição de cada benefício sobre a órbita, na ordem do conteúdo.
 *
 * Os cinco pontos ficam sobre a elipse desenhada em `Orbit` — as
 * porcentagens e o `viewBox` do SVG descrevem a mesma caixa, então o
 * conjunto continua alinhado em qualquer largura. Abaixo de `lg` as
 * posições são ignoradas e os itens caem numa grade comum.
 */
const NODE_POSITION = [
  'lg:left-[21.6%] lg:top-[14%]',
  'lg:left-[50%] lg:top-[1.5%]',
  'lg:left-[77.7%] lg:top-[13.3%]',
  'lg:left-[9%] lg:top-[55%]',
  'lg:left-[91%] lg:top-[55%]',
];

const nodeShadow = { boxShadow: '0 14px 30px -16px rgba(26,24,21,0.35)' };

/**
 * Órbita tracejada que costura os cinco benefícios ao redor do mockup.
 *
 * A elipse passa pelo centro dos cinco círculos. O traço desaparece na
 * base pelo degradê, para não competir com a sombra do notebook.
 */
const Orbit = () => (
  <svg
    className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
    viewBox="0 0 804 563"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hero-orbit-fade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="563">
        <stop offset="0" stopColor="var(--accent)" stopOpacity="0" />
        <stop offset="0.12" stopColor="var(--accent)" stopOpacity="0.55" />
        <stop offset="0.45" stopColor="var(--accent)" stopOpacity="0.4" />
        <stop offset="0.75" stopColor="var(--accent)" stopOpacity="0.12" />
        <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <ellipse
      cx="402"
      cy="300"
      rx="332"
      ry="257"
      fill="none"
      stroke="url(#hero-orbit-fade)"
      strokeWidth="1.5"
      strokeDasharray="2 9"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Composição do hero: mockup ao centro, halo âmbar ao fundo e os
 * benefícios distribuídos sobre uma órbita tracejada.
 *
 * A partir de `lg` a caixa tem proporção fixa e os benefícios são
 * posicionados em porcentagem sobre ela. Abaixo disso a mesma lista vira
 * uma grade sob o mockup — um único DOM para os dois arranjos.
 */
const HeroComposition = ({ showcase, highlights }: HeroCompositionProps) => (
  <div className="relative w-full lg:aspect-[10/7]">
    {/* Halo: brilho quente que separa o mockup do fundo creme */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[120px] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-20 blur-3xl lg:top-[54%] lg:h-[64%] lg:w-[72%]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-[120px] h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-25 blur-2xl lg:top-[54%] lg:h-[34%] lg:w-[38%]"
    />

    <Orbit />

    <DeviceShowcase
      content={showcase}
      className="mx-auto w-[86%] max-w-[380px] lg:absolute lg:left-1/2 lg:top-[46%] lg:w-[47%] lg:max-w-none lg:-translate-x-1/2"
    />

    <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 lg:mt-0 lg:block">
      {highlights.map((highlight, index) => (
        <li
          key={highlight.title}
          className={`flex flex-col items-center text-center ${
            index === highlights.length - 1 ? 'col-span-2' : ''
          } lg:absolute lg:w-[118px] lg:-translate-x-1/2 xl:w-[130px] ${NODE_POSITION[index]}`}
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-surface-raised text-ink-muted xl:h-12 xl:w-12"
            style={nodeShadow}
            aria-hidden="true"
          >
            {IconMap[highlight.icon]}
          </span>

          <span className="mt-3 text-sm font-medium leading-snug text-ink lg:mt-2.5 lg:text-xs xl:text-[13px]">
            {highlight.title}
          </span>
          <span className="mt-1 text-xs leading-snug text-ink-muted lg:text-[10px] xl:text-[11px]">
            {highlight.description}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default HeroComposition;
