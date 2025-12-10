export type TipoSite =
  | "landingInfoproduto"
  | "landingServicoLocal"
  | "institucional"
  | "miniEcommerce"
  | "capturaLead"
  | "evento"
  | "outros";

export interface OrcamentoFormValues {
  tipoSite: TipoSite;
  outroTipoSite: string;
  qtdSecoes: number;
  designNivel: "simples" | "intermediario" | "premium";
  conteudo: "clienteTemTudo" | "clienteParcial" | "voceCria";
  integracoes: {
    whatsapp: boolean;
    formularioEmail: boolean;
    emailMarketing: boolean;
    pixel: boolean;
    checkout: boolean;
    agenda: boolean;
    outro: string;
  };
  prazo: "semPressa" | "normal" | "rapido" | "urgente";
  suporte: "basico" | "mensal" | "definirDepois";
  nicho: string;
  faixaInvestimento:
    | "ate1000"
    | "1000a2000"
    | "2000a4000"
    | "acima4000"
    | "naoInformado";
  nome: string;
  email: string;
  whatsappContato: string;
  comoNosConheceu: string;
  descricaoProjeto: string;
  lgpd: boolean;
}

export const INITIAL_VALUES: OrcamentoFormValues = {
  tipoSite: 'landingInfoproduto',
  outroTipoSite: '',
  qtdSecoes: 5,
  designNivel: 'intermediario',
  conteudo: 'clienteParcial',
  integracoes: {
    whatsapp: true,
    formularioEmail: true,
    emailMarketing: false,
    pixel: true,
    checkout: false,
    agenda: false,
    outro: '',
  },
  prazo: 'normal',
  suporte: 'basico',
  nicho: '',
  faixaInvestimento: 'naoInformado',
  nome: '',
  email: '',
  whatsappContato: '',
  comoNosConheceu: '',
  descricaoProjeto: '',
  lgpd: false,
};

export const BASE_PRICE = 1200;

export const tipoSiteMultiplier: Record<TipoSite, number> = {
  landingInfoproduto: 1.1,
  landingServicoLocal: 1,
  institucional: 1.3,
  miniEcommerce: 1.8,
  capturaLead: 0.9,
  evento: 1.2,
  outros: 1.2,
};

export const designMultiplier = {
  simples: 1,
  intermediario: 1.2,
  premium: 1.4,
} as const;

export const prazoMultiplier = {
  semPressa: 0.9,
  normal: 1,
  rapido: 1.25,
  urgente: 1.5,
} as const;

export const conteudoMultiplier = {
  clienteTemTudo: 1,
  clienteParcial: 1.15,
  voceCria: 1.35,
} as const;

export function calcularOrcamento(values: OrcamentoFormValues) {
  const paginasFactor = 1 + Math.max(0, values.qtdSecoes - 3) * 0.05;

  const integracoesSelecionadas = [
    values.integracoes.whatsapp,
    values.integracoes.formularioEmail,
    values.integracoes.emailMarketing,
    values.integracoes.pixel,
    values.integracoes.checkout,
    values.integracoes.agenda,
  ].filter(Boolean).length;

  const hasOutro = values.integracoes.outro.trim().length > 0 ? 1 : 0;
  
  const totalIntegracoes = integracoesSelecionadas + hasOutro;
  const integracoesExtra = totalIntegracoes * 150;

  let preco =
    BASE_PRICE *
    tipoSiteMultiplier[values.tipoSite] *
    designMultiplier[values.designNivel] *
    prazoMultiplier[values.prazo] *
    conteudoMultiplier[values.conteudo] *
    paginasFactor +
    integracoesExtra;

  // arredondar para cima em múltiplos de 50
  preco = Math.ceil(preco / 50) * 50;

  const precoMinimo = Math.round(preco * 0.9);
  const precoMaximo = Math.round(preco * 1.15);

  return { preco, precoMinimo, precoMaximo };
}

