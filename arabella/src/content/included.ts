import type { IncludedContent } from './types';

export const included: IncludedContent = {
  heading: 'O que está incluso',
  features: [
    {
      title: 'Design sob medida',
      description:
        'Nada de template. O layout nasce do seu produto, da sua marca e do público que você quer alcançar.',
    },
    {
      title: 'Código próprio',
      description:
        'React e TypeScript escritos à mão. Sem construtor visual, sem plugin pesado, sem dependência de plataforma.',
    },
    {
      title: 'Responsivo de verdade',
      description:
        'Testado em celular, tablet e desktop. A maior parte do seu tráfego vem do celular e a página é feita para ele primeiro.',
    },
    {
      title: 'WhatsApp integrado',
      description:
        'O botão abre a conversa com a mensagem já preenchida. Menos atrito entre o clique e o primeiro contato.',
    },
    {
      title: 'Checkout integrado',
      description:
        'Nos planos Profissional e Completo, o pagamento acontece dentro do fluxo da página, sem redirecionar para fora.',
    },
    {
      title: 'Domínio e publicação',
      description:
        'Cuidamos do apontamento do domínio, do certificado e da subida para o ar. Você recebe a página funcionando.',
    },
  ],
  integrations: {
    label: 'Integrações',
    items: ['WhatsApp', 'Instagram', 'Google Analytics', 'Google Maps', 'Hotmart', 'Kiwify', 'Pix'],
  },
};
