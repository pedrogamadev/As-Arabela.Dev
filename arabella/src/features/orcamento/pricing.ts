export const BASE_PRICE = 200;
export const BASE_SECOES = 3;
export const PRECO_POR_SECAO_EXTRA = 60;

export const TIPO_SITE_PRICES = {
  landingInfoproduto: 150,
  landingServicoLocal: 150,
  institucional: 200,
  miniEcommerce: 200,
  capturaLead: 150,
  evento: 200,
  outros: 200,
} as const;

export const DESIGN_PRICES = {
  simples: 0,
  intermediario: 120,
  premium: 210,
} as const;

export const CONTEUDO_PRICES = {
  clienteTemTudo: 0,
  clienteParcial: 150,
  voceCria: 250,
} as const;

export const PRAZO_PRICES = {
  semPressa: 0,
  normal: 100,
  rapido: 190,
  urgente: 350,
} as const;

export const SUPORTE_PRICES = {
  basico: 60,
  mensal: 300,
  definirDepois: 0,
} as const;

export const INTEGRATION_PRICES = {
  whatsapp: 80,
  formularioEmail: 120,
  emailMarketing: 180,
  pixel: 120,
  checkout: 300,
  agenda: 220,
} as const;

export const OUTRA_INTEGRACAO_PRICE = 180;
export const PRICE_RANGE_PERCENT = 0.2;
