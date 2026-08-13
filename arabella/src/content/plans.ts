import type { PlansContent } from './types';

/**
 * Preços e prazos são configuráveis por dado — nenhum deles está no código.
 *
 * TODO(conteúdo): os PREÇOS abaixo vieram da tabela que já estava no
 * repositório. Os PRAZOS por plano foram derivados do "a partir de 7 dias"
 * do hero e precisam da sua confirmação. Confira ambos contra o PDF
 * aprovado antes de publicar.
 */
export const plans: PlansContent = {
  heading: 'Planos',
  note: 'Pagamento à vista ou em até 12x. Prazo conta do aceite do layout.',
  excludesLabel: 'Não inclui',
  plans: [
    {
      id: 'essencial',
      name: 'Essencial',
      price: 'R$ 490,90',
      deadline: 'Entrega em 7 dias',
      includes: [
        'Landing page com até 3 seções',
        'Design sob medida, sem template',
        'Responsivo em celular, tablet e desktop',
        'Botão de WhatsApp com mensagem pronta',
        'Domínio incluso no primeiro ano',
        'Uma revisão após a publicação',
      ],
      excludes: ['Checkout integrado', 'Página adicional', 'Integração com plataforma de curso'],
    },
    {
      id: 'profissional',
      name: 'Profissional',
      price: 'R$ 690,90',
      deadline: 'Entrega em 10 dias',
      includes: [
        'Landing page com até 5 seções',
        'Tudo do plano Essencial',
        'Checkout integrado à página',
        'Integração com Hotmart ou Kiwify',
        'Google Analytics configurado',
        'Duas revisões após a publicação',
      ],
      excludes: ['Página adicional em rota própria'],
      featured: true,
      badge: 'Mais escolhido',
    },
    {
      id: 'completo',
      name: 'Completo',
      price: 'R$ 1.290,90',
      deadline: 'Entrega em 15 dias',
      includes: [
        'Landing page com até 6 seções',
        'Tudo do plano Profissional',
        'Página adicional em rota própria, com até 3 seções',
        'Checkout e WhatsApp em ambas as páginas',
        'Eventos de conversão instrumentados',
        'Três revisões após a publicação',
      ],
      excludes: ['Sistema sob medida — orçado à parte'],
    },
  ],
  footnotes: {
    systems: {
      lead: 'Precisa de mais do que uma página? ',
      linkLabel: 'Veja os sistemas que desenvolvemos',
      href: '/sistemas',
      trail: '.',
    },
    // Configurável por dado.
    maintenance: 'Manutenção mensal opcional a partir de R$ 9,90 por mês, cancelável a qualquer momento.',
  },
};
