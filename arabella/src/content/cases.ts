export interface CaseMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  description: string;
  results: CaseMetric[];
  beforeImage: string;
  afterImage: string;
}

import caseAuroraBefore from '../assets/case-aurora-before.svg';
import caseAuroraAfter from '../assets/case-aurora-after.svg';
import caseCoraBefore from '../assets/case-cora-before.svg';
import caseCoraAfter from '../assets/case-cora-after.svg';
import caseLumeBefore from '../assets/case-lume-before.svg';
import caseLumeAfter from '../assets/case-lume-after.svg';

export const casesContent: CaseStudy[] = [
  {
    id: 'aurora-fit',
    name: 'Aurora Fit Club',
    description:
      'Redesign completo do site de assinaturas fitness com onboarding guiado e prova social em destaque.',
    results: [
      { label: 'Taxa de conversão', value: '+38%' },
      { label: 'Core Web Vitals', value: '99/100' },
    ],
    beforeImage: caseAuroraBefore,
    afterImage: caseAuroraAfter,
  },
  {
    id: 'cora-finance',
    name: 'Cora Finance',
    description:
      'Migração de landing bancária para stack headless com foco em velocidade e geração de MQLs.',
    results: [
      { label: 'CPL', value: '-27%' },
      { label: 'Tempo de carregamento', value: '1.2s' },
    ],
    beforeImage: caseCoraBefore,
    afterImage: caseCoraAfter,
  },
  {
    id: 'lume-education',
    name: 'Lume Educação',
    description:
      'Portal institucional com CMS estruturado, SEO técnico e biblioteca de componentes para campanhas.',
    results: [
      { label: 'Palavras-chave top 3', value: '+64%' },
      { label: 'Leads qualificados', value: '+52%' },
    ],
    beforeImage: caseLumeBefore,
    afterImage: caseLumeAfter,
  },
];
