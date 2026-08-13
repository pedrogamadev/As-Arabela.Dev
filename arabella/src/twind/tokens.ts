/**
 * Fonte única de verdade do sistema visual.
 *
 * Nenhum valor de cor pode ser escrito fora deste arquivo — nem em JSX,
 * nem em CSS. Componentes consomem exclusivamente pelos utilitários
 * gerados a partir daqui (`bg-surface-base`, `text-ink-muted`, ...).
 */

export const color = {
  surface: {
    /** Off-white quente — fundo padrão da página. */
    base: '#FAF8F3',
    /** Bege claro — faixas alternadas que criam o ritmo vertical. */
    alt: '#F0EDE4',
    /** Quase preto quente — seção de case e footer. */
    dark: '#1A1815',
    /** Branco puro — painel de contraste e cards de plano. */
    raised: '#FFFFFF',
  },
  /** Âmbar da marca. Único acento cromático do sistema. */
  accent: '#E8A317',
  /** Âmbar rebaixado, para hover de superfícies âmbar. */
  accentPressed: '#D18F0C',
  ink: {
    /** Texto primário sobre fundo claro. */
    DEFAULT: '#1A1815',
    /** Texto secundário sobre fundo claro (cinza quente). */
    muted: '#6B675E',
    /** Texto primário sobre fundo escuro. */
    inverse: '#FAF8F3',
    /** Texto secundário sobre fundo escuro. */
    inverseMuted: '#A8A296',
  },
  /** Hairline de 1px. */
  hairline: '#DDD8CC',
  /** Hairline sobre fundo escuro. */
  hairlineDark: '#332F29',
  /** Ponto de disponibilidade. */
  positive: '#2F7D4F',
} as const;

export const font = {
  /** Serifada de alto contraste. h1, h2 e números de métrica. Sempre peso 400. */
  display: ['Instrument Serif', 'Georgia', 'Times New Roman', 'serif'],
  /** Sans-serif. Corpo, labels e botões. Pesos 400 e 500. */
  sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
} as const;

/**
 * Variáveis CSS expostas no `:root`, para que o preflight e qualquer
 * regra crua consumam token em vez de literal.
 */
export const cssVariables: Record<string, string> = {
  '--surface-base': color.surface.base,
  '--surface-alt': color.surface.alt,
  '--surface-dark': color.surface.dark,
  '--surface-raised': color.surface.raised,
  '--accent': color.accent,
  '--accent-pressed': color.accentPressed,
  '--ink': color.ink.DEFAULT,
  '--ink-muted': color.ink.muted,
  '--ink-inverse': color.ink.inverse,
  '--ink-inverse-muted': color.ink.inverseMuted,
  '--hairline': color.hairline,
  '--hairline-dark': color.hairlineDark,
  '--positive': color.positive,
  '--font-display': font.display.map(f => (f.includes(' ') ? `"${f}"` : f)).join(', '),
  '--font-sans': font.sans.map(f => (f.includes(' ') ? `"${f}"` : f)).join(', '),
};
