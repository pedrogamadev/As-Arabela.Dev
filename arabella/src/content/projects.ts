import type { ProjectsContent } from './types';

/**
 * TODO(conteúdo): PLACEHOLDER — trocar pelos projetos reais no ar.
 * Nomes e status abaixo são fictícios e servem só para dar forma à lista.
 */
export const projects: ProjectsContent = {
  heading: 'Outros projetos no ar',
  projects: [
    {
      name: 'Projeto um',
      description: 'Uma frase curta descrevendo o que o projeto faz.',
      status: 'No ar',
    },
    {
      name: 'Projeto dois',
      description: 'Uma frase curta descrevendo o que o projeto faz.',
      status: 'No ar',
    },
    {
      name: 'Projeto três',
      description: 'Uma frase curta descrevendo o que o projeto faz.',
      status: 'No ar',
    },
    {
      name: 'Projeto quatro',
      description: 'Uma frase curta descrevendo o que o projeto faz.',
      status: 'Em desenvolvimento',
    },
  ],
  footnote: {
    lead: 'Também desenvolvemos sistemas sob medida. ',
    linkLabel: 'Ver o que construímos além de landing pages',
    href: '/sistemas',
    trail: '.',
  },
};
