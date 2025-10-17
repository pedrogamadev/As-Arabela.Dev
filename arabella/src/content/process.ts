export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'brief',
    title: 'Brief & Kickoff',
    description:
      'Alinhamos objetivos, personas e métricas em um workshop colaborativo para priorizar o que gera resultado imediato.',
    duration: 'Semana 1',
  },
  {
    id: 'design',
    title: 'Design + Conteúdo',
    description:
      'Criamos wireframes e UI rica em storytelling, sempre com copy em português pensada para SEO e conversão.',
    duration: 'Semanas 2-3',
  },
  {
    id: 'build',
    title: 'Build & QA',
    description:
      'Desenvolvemos em React/Vite com testes manuais e automatizados leves, garantindo Web Vitals dentro da zona verde.',
    duration: 'Semanas 3-4',
  },
  {
    id: 'launch',
    title: 'Lançamento & Growth',
    description:
      'Configuramos analytics, roteiros de experimentos e entregamos playbook de otimização contínua pós-lançamento.',
    duration: 'Semana 5',
  },
];
