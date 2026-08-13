import type { NotFoundContent } from './types';

/**
 * Conteúdo da rota curinga.
 *
 * O 404 é a única página que o visitante nunca pediu para ver — por isso
 * ele assume a culpa pelo endereço quebrado, não o visitante, e oferece
 * caminhos concretos em vez de um beco sem saída.
 */
export const notFound: NotFoundContent = {
  documentTitle: 'Página não encontrada | Arabella Dev',
  eyebrow: 'Erro 404',
  titleLead: 'Você achou uma página que ',
  titleHighlight: 'não existe',
  titleTrail: '.',
  paragraph:
    'O endereço mudou de lugar, veio digitado errado ou nunca chegou a ser publicado. Nada quebrou do seu lado — e a sua página, essa a gente publica em 7 dias.',
  frame: {
    address: 'arabella.dev/pagina-que-sumiu',
    codeBefore: '4',
    codeAfter: '4',
    status: 'Endereço não encontrado',
  },
  frameCard: {
    label: 'Sua página no ar em',
    value: '7 dias',
  },
  homeLink: {
    label: 'Voltar para o início',
    href: '/',
  },
  suggestionsHeading: 'Talvez você procure',
  suggestions: [
    {
      label: 'Planos',
      description: 'Preço à vista, prazo e o que entra em cada escopo.',
      href: '/#planos',
    },
    {
      label: 'Como funciona',
      description: 'Do briefing à publicação, etapa por etapa.',
      href: '/#como-funciona',
    },
    {
      label: 'Perguntas frequentes',
      description: 'Prazo, revisões, domínio, pagamento e manutenção.',
      href: '/#faq',
    },
    {
      label: 'Sistemas sob medida',
      description: 'ERP, agendamento, área de membros e painéis de gestão.',
      href: '/sistemas',
    },
    {
      label: 'Parceiros',
      description: 'Para agências, designers e consultores que revendem.',
      href: '/parceiros',
    },
  ],
};
