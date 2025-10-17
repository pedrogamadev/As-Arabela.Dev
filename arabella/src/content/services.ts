export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'landing' | 'ecommerce' | 'ongoing';
  bullets: string[];
  whatsIncluded: string[];
}

export const servicesContent: ServiceItem[] = [
  {
    id: 'landing-pages',
    title: 'Landing Pages de Lançamento',
    description:
      'Copy estratégica, layout responsivo e automações prontas para campanhas de mídia.',
    icon: 'landing',
    bullets: [
      'Diagnóstico de funil e proposta de valor',
      'Design exclusivo com biblioteca reutilizável',
      'Implementação em React ou CMS headless',
      'Integração com CRM, anúncios e analytics',
    ],
    whatsIncluded: [
      'Workshop de descoberta (2h)',
      'Prototipagem de alta fidelidade',
      'Desenvolvimento responsivo e otimização de performance',
      'Setup de eventos no Google Analytics e Meta Ads',
      'Treinamento da equipe de marketing',
    ],
  },
  {
    id: 'ecommerce-lite',
    title: 'E-commerce Lite',
    description:
      'Loja enxuta, focada em alta conversão e integrações que escalam sem plugins pesados.',
    icon: 'ecommerce',
    bullets: [
      'Arquitetura headless ou Shopify custom',
      'Checkout otimizado com gatilhos de confiança',
      'Catálogo gerenciável e SEO técnico aplicado',
      'Dashboards de receita e comportamento',
    ],
    whatsIncluded: [
      'Setup completo de catálogo e coleções',
      'Integração com gateway de pagamento',
      'Automação de carrinho abandonado',
      'Migração de dados essenciais',
      'Guia de operação + playbook de growth',
    ],
  },
  {
    id: 'ongoing-care',
    title: 'Evolução Contínua + SEO',
    description:
      'Retainer mensal para monitorar, testar e lançar melhorias de performance e conteúdo.',
    icon: 'ongoing',
    bullets: [
      'Squad fractional de design + dev + SEO',
      'Planejamento de experimentos mensais',
      'Dashboard de KPIs com insights acionáveis',
      'Rotina de otimização técnica e conteúdo',
    ],
    whatsIncluded: [
      'Roadmap trimestral priorizado',
      'Implementação de testes A/B leves',
      'Atualizações de Core Web Vitals',
      'Produção de artigos otimizados (2/mês)',
      'Relatório executivo com próximos passos',
    ],
  },
];
