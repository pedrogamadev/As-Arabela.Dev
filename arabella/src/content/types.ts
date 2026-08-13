/**
 * Contratos da camada de conteúdo.
 *
 * Todo texto da landing page vive em `src/content`. Componentes de
 * apresentação recebem estes objetos por props e nunca importam
 * arquivos de conteúdo diretamente — a composição acontece na página.
 */

/** Ação de conversão única da página. Repetida de forma idêntica em todos os pontos. */
export interface CallToAction {
  /** Texto do botão. Idêntico em header, hero, planos e fechamento. */
  label: string;
  /** Destino único de todos os CTAs. */
  href: string;
}

export interface HeaderContent {
  brandName: string;
  logoSrc: string;
  /** Rótulo acessível do landmark de navegação. */
  navLabel: string;
  nav: Array<{ label: string; targetId: string }>;
  /** Configurável por dado: muda conforme a agenda. */
  availability: string;
}

export interface HeroContent {
  eyebrow: string;
  /** Trecho anterior ao destaque em marca-texto. */
  titleLead: string;
  /** Trecho destacado em marca-texto âmbar (o prazo). */
  titleHighlight: string;
  /** Trecho posterior ao destaque. */
  titleTrail: string;
  subtitle: string;
  secondaryLink: { label: string; targetId: string };
  /** Card sobreposto no canto inferior direito do mockup. */
  mockupCard: { label: string; value: string };
}

export interface SocialProofMetric {
  value: string;
  label: string;
}

export interface ContrastContent {
  heading: string;
  common: { title: string; items: string[] };
  delivered: { title: string; items: string[] };
}

export interface ProcessStep {
  /** Ordinal exibido em serifada âmbar. */
  ordinal: string;
  /** Faixa de prazo, alinhada à direita do ordinal. */
  timeframe: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  heading: string;
  /** Nota alinhada à direita do título. */
  note: string;
  steps: ProcessStep[];
}

export interface IncludedFeature {
  title: string;
  description: string;
}

export interface IncludedContent {
  heading: string;
  features: IncludedFeature[];
  integrations: { label: string; items: string[] };
}

export interface CaseContent {
  eyebrow: string;
  client: string;
  context: string;
  metrics: SocialProofMetric[];
}

export interface BuilderContent {
  heading: string;
  name: string;
  role: string;
  paragraph: string;
  photo: { src: string; alt: string; width: number; height: number };
}

export interface ProjectEntry {
  name: string;
  description: string;
  /** Status ou número alinhado à direita da linha. */
  status: string;
}

export interface ProjectsContent {
  heading: string;
  projects: ProjectEntry[];
  footnote: { lead: string; linkLabel: string; href: string; trail: string };
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  /** Prazo de entrega do plano. Configurável por dado. */
  deadline: string;
  includes: string[];
  excludes: string[];
  /** Card em destaque: borda espessa, deslocamento e botão preenchido. */
  featured?: boolean;
  /** Etiqueta no canto superior direito do card em destaque. */
  badge?: string;
}

export interface PlansContent {
  heading: string;
  /** Nota de pagamento e prazo, alinhada à direita do título. */
  note: string;
  /** Rótulo do bloco de exclusões dentro de cada card. */
  excludesLabel: string;
  plans: Plan[];
  footnotes: {
    systems: { lead: string; linkLabel: string; href: string; trail: string };
    /** Valor da manutenção mensal. Configurável por dado. */
    maintenance: string;
  };
}

export interface GuaranteeItem {
  title: string;
  description: string;
}

export interface GuaranteeContent {
  heading: string;
  items: GuaranteeItem[];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface FaqContent {
  heading: string;
  entries: FaqEntry[];
}

export interface FinalCtaContent {
  heading: string;
  subtitle: string;
}

export interface FooterContent {
  brandName: string;
  description: string;
  columns: Array<{
    title: string;
    links: Array<{ label: string; href: string; targetId?: string }>;
  }>;
  copyright: string;
}
