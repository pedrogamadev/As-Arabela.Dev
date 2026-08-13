import type { BuilderContent } from './types';

export const builder: BuilderContent = {
  heading: 'Quem constrói',
  name: 'Pedro Medeiros',
  role: 'Desenvolvedor e fundador da Arabella Dev',
  paragraph:
    'Escrevo software há anos e construo sistemas completos — ERP, agendamento, área de membros, painéis de gestão. Landing page é a parte mais visível do que faço, não o limite. Quando o seu negócio precisar de algo que uma página não resolve, quem vai desenvolver já conhece o seu contexto.',
  photo: {
    // TODO(asset): colocar o arquivo em `public/imagens/quem-constroi.jpg`.
    // Proporção 4:5. Nenhuma alteração de código é necessária depois disso.
    src: '/imagens/quem-constroi.jpg',
    alt: 'Retrato de Pedro Medeiros, desenvolvedor e fundador da Arabella Dev',
    width: 800,
    height: 1000,
  },
};
