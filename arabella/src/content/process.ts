import type { ProcessContent } from './types';

export const process: ProcessContent = {
  heading: 'Como funciona',
  note: 'Da conversa à publicação em 7 dias',
  steps: [
    {
      ordinal: '01',
      timeframe: 'Dia 1',
      title: 'Conversa',
      description:
        'Uma chamada curta para entender o que você vende, para quem e qual ação a página precisa provocar.',
    },
    {
      ordinal: '02',
      timeframe: 'Dias 2 e 3',
      title: 'Layout',
      description:
        'Você recebe o desenho da página completa e aprova antes de qualquer linha de código ser escrita.',
    },
    {
      ordinal: '03',
      timeframe: 'Dias 4 a 6',
      title: 'Desenvolvimento',
      description:
        'Código sob medida, responsivo, com WhatsApp e checkout ligados conforme o plano contratado.',
    },
    {
      ordinal: '04',
      timeframe: 'Dia 7',
      title: 'Publicação',
      description:
        'Domínio apontado, página no ar e uma revisão inclusa para ajustes finais depois de você ver tudo funcionando.',
    },
  ],
};
