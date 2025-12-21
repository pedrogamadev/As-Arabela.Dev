import {
  BASE_PRICE,
  BASE_SECOES,
  CONTEUDO_PRICES,
  DESIGN_PRICES,
  INTEGRATION_PRICES,
  OUTRA_INTEGRACAO_PRICE,
  PRAZO_PRICES,
  PRECO_POR_SECAO_EXTRA,
  PRICE_RANGE_PERCENT,
  SUPORTE_PRICES,
  TIPO_SITE_PRICES,
} from './pricing';

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
  nome: '',
  email: '',
  whatsappContato: '',
  comoNosConheceu: '',
  descricaoProjeto: '',
  lgpd: false,
};

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
  integracoes: {
    whatsapp: "WhatsApp/Botão",
    formularioEmail: "Formulário Email",
    emailMarketing: "Email Marketing",
  }
};

export function calcularOrcamento(values: OrcamentoFormValues) {
  const paginasExtras = Math.max(0, values.qtdSecoes - BASE_SECOES);
  const valorPaginas = paginasExtras * PRECO_POR_SECAO_EXTRA;

  const valorIntegracoes = (Object.keys(INTEGRATION_PRICES) as Array<
    keyof typeof INTEGRATION_PRICES
  >).reduce((total, key) => {
    if (!values.integracoes[key]) {
      return total;
    }
    return total + INTEGRATION_PRICES[key];
  }, 0);

  const valorOutraIntegracao =
    values.integracoes.outro.trim().length > 0
      ? OUTRA_INTEGRACAO_PRICE
      : 0;

  let preco =
    BASE_PRICE +
    TIPO_SITE_PRICES[values.tipoSite] +
    DESIGN_PRICES[values.designNivel] +
    CONTEUDO_PRICES[values.conteudo] +
    PRAZO_PRICES[values.prazo] +
    SUPORTE_PRICES[values.suporte] +
    valorPaginas +
    valorIntegracoes +
    valorOutraIntegracao;

  // arredondar para cima em múltiplos de 50
  preco = Math.ceil(preco / 50) * 50;

  const precoMinimo = Math.round(preco * (1 - PRICE_RANGE_PERCENT));
  const precoMaximo = Math.round(preco * (1 + PRICE_RANGE_PERCENT));

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
