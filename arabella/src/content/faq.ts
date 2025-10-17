export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Qual é o prazo típico para lançar um projeto?',
    answer:
      'Nosso sprint padrão dura 5 semanas: kickoff, design, desenvolvimento, QA e go-live. Projetos urgentes podem ser priorizados com squad dedicado.',
  },
  {
    question: 'Vocês trabalham com plataformas existentes da empresa?',
    answer:
      'Sim. Integramos com CRMs, gateways de pagamento, automações de marketing e CMSs já utilizados pelo time, garantindo governança e segurança.',
  },
  {
    question: 'Como funciona o suporte após o lançamento?',
    answer:
      'Oferecemos plano de evolução contínua com monitoramento de métricas, backlog compartilhado e ciclos mensais de melhorias rápidas.',
  },
  {
    question: 'Posso contratar apenas o design ou apenas o desenvolvimento?',
    answer:
      'Podemos atuar em etapas específicas, mas recomendamos o fluxo completo para garantir consistência, performance e resultados previsíveis.',
  },
];
