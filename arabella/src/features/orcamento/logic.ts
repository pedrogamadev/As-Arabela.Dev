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

/* LABELS PARA UI E WHATSAPP */
export const LABELS = {
  tipoSite: {
    landingInfoproduto: "Landing Page Infoproduto",
    landingServicoLocal: "Landing Page Serviço Local",
    institucional: "Site Institucional",
    miniEcommerce: "Mini E-commerce",
    capturaLead: "Página de Captura",
    evento: "Página de Evento",
    outros: "Outro",
  },
  designNivel: {
    simples: "Simples",
    intermediario: "Intermediário",
    premium: "Premium",
  },
  conteudo: {
    clienteTemTudo: "Já tenho textos e imagens",
    clienteParcial: "Tenho parte, preciso de ajuda",
    voceCria: "Quero que vocês criem tudo",
  },
  prazo: {
    semPressa: "Sem pressa (20–30 dias)",
    normal: "Normal (10–15 dias)",
    rapido: "Rápido (até 7 dias)",
    urgente: "Urgente (3 dias ou menos)",
  },
  suporte: {
    basico: "Correções básicas (30 dias)",
    mensal: "Plano mensal de suporte",
    definirDepois: "Decidimos depois",
  },
  faixaInvestimento: {
    ate1000: "Até R$ 1.000",
    "1000a2000": "R$ 1.000 – R$ 2.000",
    "2000a4000": "R$ 2.000 – R$ 4.000",
    acima4000: "Acima de R$ 4.000",
    naoInformado: "Não informado",
  },
  integracoes: {
    whatsapp: "WhatsApp/Botão",
    formularioEmail: "Formulário Email",
    emailMarketing: "Email Marketing",
    pixel: "Pixel (Meta/Google)",
    checkout: "Checkout",
    agenda: "Agenda",
  }
};

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

  // Redução de 65% no valor total (ajuste de mercado)
  preco = preco * 0.20;

  // arredondar para cima em múltiplos de 50
  preco = Math.ceil(preco / 50) * 50;

  const precoMinimo = Math.round(preco * 0.9);
  const precoMaximo = Math.round(preco * 1.15);

  return { preco, precoMinimo, precoMaximo };
}

export function generateWhatsAppMessage(
  values: OrcamentoFormValues,
  orcamento: { precoMinimo: number; precoMaximo: number }
) {
  const integracoesList = Object.entries(values.integracoes)
    .filter(([key, val]) => key !== 'outro' && val === true)
    .map(
      ([key]) =>
        `- ${
          LABELS.integracoes[key as keyof typeof LABELS.integracoes]
        }`
    )
    .join('\n');

  let integracoesText = integracoesList || 'Nenhuma selecionada';
  if (values.integracoes.outro) {
    integracoesText += `\n- Outro: ${values.integracoes.outro}`;
  }

  const message = `*SOLICITAÇÃO DE ORÇAMENTO*
*Arabella.dev*
_____________________________

*DADOS DO CLIENTE*
*Nome:* ${values.nome}
*WhatsApp:* ${values.whatsappContato}
*Email:* ${values.email}

*SOBRE O PROJETO*
*Tipo:* ${LABELS.tipoSite[values.tipoSite]} ${
    values.tipoSite === 'outros' ? `(${values.outroTipoSite})` : ''
  }
*Páginas:* ${values.qtdSecoes}
*Nível Design:* ${LABELS.designNivel[values.designNivel]}

*ESCOPO TÉCNICO*
*Conteúdo:* ${LABELS.conteudo[values.conteudo]}
*Integrações:*
${integracoesText}

*PRAZOS E SUPORTE*
*Prazo Desejado:* ${LABELS.prazo[values.prazo]}
*Suporte Pós:* ${LABELS.suporte[values.suporte]}

*PERFIL DO CLIENTE*
*Nicho:* ${values.nicho}
*Investimento:* ${LABELS.faixaInvestimento[values.faixaInvestimento]}
*Origem:* ${values.comoNosConheceu}

*DESCRIÇÃO:*
_${values.descricaoProjeto}_

_____________________________

*INVESTIMENTO ESTIMADO*
*R$ ${orcamento.precoMinimo.toLocaleString('pt-BR')} – R$ ${orcamento.precoMaximo.toLocaleString('pt-BR')}*
_Valor aproximado sujeito a análise_
`;

  return message;
}

