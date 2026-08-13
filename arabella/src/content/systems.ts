export type SystemIcon =
  | 'agendamento'
  | 'pagamentos'
  | 'saas'
  | 'gestao'
  | 'financeiro'
  | 'rh'
  | 'catalogo'
  | 'membros';

export interface SystemCard {
  id: string;
  title: string;
  description: string;
  icon: SystemIcon;
  bullets: string[];
}

export interface OwnershipMode {
  id: string;
  kicker: string;
  title: string;
  description: string;
  punchline: string;
}

export interface SecurityItem {
  title: string;
  description: string;
}

/** Frases que aparecem no efeito de digitação — humor com a mensagem clara. */
export const systemsHumorLines: string[] = [
  'Você descreve o problema. A gente devolve resolvido, com login e tudo.',
  'Faço o sistema dos seus sonhos; você faz o pagamento. Parceria justa.',
  'Desenvolvo do zero — e sim, ele já nasce funcionando.',
  'Agendamento que não marca dois clientes no mesmo horário. Revolucionário, eu sei.',
  'Pagamento integrado: Pix, cartão, boleto e assinatura que cobra sozinha.',
  'SaaS completo: planos, assinantes, limites e painel de dono.',
  'Cuido dos dados dos seus clientes como se fossem meus. Porque, no fim, são.',
  'Backup, log e permissão por perfil: o tédio que salva empresa.',
  'Crio um sistema para você usar, revender ou vender com a sua marca.',
  'Escopo, prazo e preço no papel. Surpresa é só no aniversário.',
];

export const systemCards: SystemCard[] = [
  {
    id: 'agendamento',
    title: 'Sistema de agendamento',
    description:
      'Sua agenda online, funcionando sozinha enquanto você atende. Sem lista de espera no WhatsApp.',
    icon: 'agendamento',
    bullets: [
      'Horários, bloqueios e múltiplos profissionais',
      'Confirmação e lembrete automáticos',
      'Zero conflito de horário — a regra é do sistema, não da memória',
    ],
  },
  {
    id: 'pagamentos',
    title: 'Pagamentos integrados',
    description:
      'Integro o pagamento direto no seu site ou sistema. O dinheiro entra sem você precisar cobrar.',
    icon: 'pagamentos',
    bullets: [
      'Pix, cartão, boleto e assinatura recorrente',
      'Webhook, conciliação e liberação automática de acesso',
      'Recibo, histórico e relatório de recebimentos',
    ],
  },
  {
    id: 'saas',
    title: 'SaaS do zero',
    description:
      'Da ideia ao primeiro assinante pagante. Arquitetura pensada para crescer sem precisar refazer tudo depois.',
    icon: 'saas',
    bullets: [
      'Multiusuário, times e níveis de acesso',
      'Planos, limites de uso e cobrança recorrente',
      'Painel do dono com métricas de verdade',
    ],
  },
  {
    id: 'gestao',
    title: 'Gestão empresarial',
    description:
      'A operação inteira em um lugar só. Aquele ERP que cabe na sua empresa em vez do contrário.',
    icon: 'gestao',
    bullets: [
      'Cadastros, estoque, ordens de serviço e contratos',
      'Fluxos e aprovações do jeito que a empresa trabalha',
      'Relatórios que respondem perguntas, não geram novas',
    ],
  },
  {
    id: 'financeiro',
    title: 'Sistema financeiro',
    description:
      'Contas a pagar, a receber e a verdade sobre o caixa — sem depender daquela planilha que só uma pessoa entende.',
    icon: 'financeiro',
    bullets: [
      'Contas a pagar e receber com vencimentos e alertas',
      'Fluxo de caixa, centros de custo e conciliação',
      'Exportação para o contador sem drama',
    ],
  },
  {
    id: 'rh',
    title: 'Sistema de RH',
    description:
      'Menos papel, menos planilha e mais tempo pra cuidar de gente — que é o que RH deveria fazer.',
    icon: 'rh',
    bullets: [
      'Admissão, documentos e ficha do colaborador',
      'Ponto, férias, escalas e solicitações',
      'Avaliações, treinamentos e histórico completo',
    ],
  },
  {
    id: 'catalogo',
    title: 'Catálogo e pedidos',
    description:
      'Seu catálogo online sempre atualizado, com pedido chegando pronto — no painel ou direto no WhatsApp.',
    icon: 'catalogo',
    bullets: [
      'Produtos, variações, estoque e preços',
      'Carrinho e pedido via WhatsApp ou checkout',
      'Você troca o preço em segundos, sem chamar ninguém',
    ],
  },
  {
    id: 'membros',
    title: 'Área de membros',
    description:
      'Conteúdo liberado só para quem pagou. Automático, do clique no pagamento até o acesso na tela.',
    icon: 'membros',
    bullets: [
      'Login seguro e níveis de acesso por plano',
      'Aulas, materiais, progresso e certificados',
      'Liberação e bloqueio automáticos conforme a assinatura',
    ],
  },
];

export const securityItems: SecurityItem[] = [
  {
    title: 'Criptografia de ponta a ponta do que importa',
    description: 'Tráfego em HTTPS, senhas com hash forte e dados sensíveis protegidos em repouso.',
  },
  {
    title: 'Acesso por perfil, não por confiança',
    description: 'Cada pessoa vê só o que precisa ver. Autenticação forte e sessão controlada.',
  },
  {
    title: 'LGPD levada a sério',
    description: 'Consentimento, finalidade, tempo de retenção e exclusão de dados quando pedirem.',
  },
  {
    title: 'Backup automático e restauração testada',
    description: 'Backup que ninguém testa não é backup, é esperança. O seu a gente testa.',
  },
  {
    title: 'Log de auditoria',
    description: 'Quem fez o quê e quando. Ótimo para processo, melhor ainda para dormir tranquilo.',
  },
  {
    title: 'Testes automatizados e code review',
    description: 'Nada vai pro ar sem passar pelos testes e por outro par de olhos do time.',
  },
  {
    title: 'Versionamento, deploy revisado e rollback',
    description: 'Se algo der errado, voltamos à versão anterior em minutos — não em madrugadas.',
  },
  {
    title: 'Monitoramento e alertas',
    description: 'A gente costuma descobrir o problema antes do seu cliente descobrir.',
  },
];

export const ownershipModes: OwnershipMode[] = [
  {
    id: 'usar',
    kicker: 'Para você usar',
    title: 'Sistema sob medida para a sua operação',
    description:
      'Feito para o seu processo, não para o processo genérico de um template. Você para de adaptar a empresa ao software.',
    punchline: 'O software se adapta a você. Justo, né?',
  },
  {
    id: 'revender',
    kicker: 'Para você revender',
    title: 'White-label com a sua marca',
    description:
      'Sua marca, seu domínio, sua base de clientes, seu preço. Eu e o time ficamos nos bastidores fazendo a parte técnica.',
    punchline: 'Você aparece. A gente prefere o backend mesmo.',
  },
  {
    id: 'produto',
    kicker: 'Para virar produto',
    title: 'SaaS com assinatura recorrente',
    description:
      'Arquitetura multiusuário, planos, cobrança recorrente e métricas. Você deixa de vender projeto e passa a ter produto.',
    punchline: 'De prestador de serviço a dono de produto.',
  },
];
