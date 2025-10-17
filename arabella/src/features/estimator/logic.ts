export interface EstimatorInput {
  tipoProjeto: 'landing' | 'ecommerce' | 'institucional';
  paginas: number;
  blog: boolean;
  integracoes: 'nenhuma' | 'crm' | 'erp' | 'pagamentos';
  prazo: 'rapido' | 'equilibrado' | 'calmo';
  investimento: 'essencial' | 'crescimento' | 'dominio';
}

export interface EstimatorResult {
  min: number;
  max: number;
  etaWeeks: number;
}

const baseValores: Record<EstimatorInput['tipoProjeto'], number> = {
  landing: 6800,
  ecommerce: 12400,
  institucional: 8800,
};

const multiplicadoresPrazo: Record<EstimatorInput['prazo'], number> = {
  rapido: 1.35,
  equilibrado: 1,
  calmo: 0.9,
};

const multiplicadoresIntegracao: Record<EstimatorInput['integracoes'], number> = {
  nenhuma: 1,
  crm: 1.1,
  erp: 1.25,
  pagamentos: 1.2,
};

const multiplicadoresInvestimento: Record<EstimatorInput['investimento'], number> = {
  essencial: 0.92,
  crescimento: 1,
  dominio: 1.18,
};

export const estimateProjeto = (input: EstimatorInput): EstimatorResult => {
  const base = baseValores[input.tipoProjeto];
  const paginasExtra = Math.max(0, input.paginas - 1);
  const valorPaginas = paginasExtra * 1200;
  const valorBlog = input.blog ? 1800 : 0;

  const subtotal = base + valorPaginas + valorBlog;
  const ajustado =
    subtotal *
    multiplicadoresPrazo[input.prazo] *
    multiplicadoresIntegracao[input.integracoes] *
    multiplicadoresInvestimento[input.investimento];

  const min = Math.round(ajustado * 0.9);
  const max = Math.round(ajustado * 1.1);

  const baseEta = input.tipoProjeto === 'ecommerce' ? 7 : 5;
  const prazoFactor = input.prazo === 'rapido' ? 0.75 : input.prazo === 'calmo' ? 1.2 : 1;
  const etaWeeks = Math.max(3, Math.round((baseEta + paginasExtra) * prazoFactor));

  return { min, max, etaWeeks };
};
