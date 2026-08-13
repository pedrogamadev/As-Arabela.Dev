import type { FaqContent } from './types';

export const faq: FaqContent = {
  heading: 'Perguntas frequentes',
  entries: [
    {
      question: 'Em quanto tempo minha página fica pronta?',
      answer:
        'A partir de 7 dias no plano Essencial. O prazo começa a contar quando você aprova o layout, e a data de publicação fica escrita em contrato.',
    },
    {
      question: 'Vocês usam template pronto?',
      answer:
        'Não. Cada página é desenhada e codificada do zero, em React e TypeScript, a partir do que o seu negócio vende e de quem você quer alcançar.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer:
        'Metade na aprovação do layout e metade na publicação. Aceitamos Pix, boleto e cartão em até 12x. Você nunca paga o valor inteiro adiantado.',
    },
    {
      question: 'O que é o checkout integrado?',
      answer:
        'Nos planos Profissional e Completo, o pagamento acontece dentro do fluxo da própria página, com Hotmart ou Kiwify ligados por trás, sem jogar o visitante para fora do site.',
    },
    {
      question: 'Posso pedir alterações durante o projeto?',
      answer:
        'Pode. Há uma rodada de revisão em cada etapa, e cada plano inclui revisões após a publicação — uma no Essencial, duas no Profissional e três no Completo.',
    },
    {
      question: 'Domínio e hospedagem estão inclusos?',
      answer:
        'O domínio está incluso no primeiro ano em todos os planos, e cuidamos do apontamento, do certificado e da subida para o ar. A hospedagem entra na manutenção mensal opcional.',
    },
    {
      question: 'A página funciona bem no celular?',
      answer:
        'Ela é construída primeiro para o celular e só depois adaptada para telas maiores, porque é de lá que vem a maior parte do tráfego. Testamos em celular, tablet e desktop antes de publicar.',
    },
    {
      question: 'O código fica comigo?',
      answer:
        'Fica. Ao final do projeto o repositório é transferido para o seu nome. Você não fica preso a nenhuma plataforma nem a nós.',
    },
    {
      question: 'Vocês só fazem landing page?',
      answer:
        'Não. Landing page é a porta de entrada. Também desenvolvemos sistemas sob medida — ERP, agendamento, área de membros, painéis de gestão e SaaS. Veja o que já construímos em /sistemas.',
    },
  ],
};
