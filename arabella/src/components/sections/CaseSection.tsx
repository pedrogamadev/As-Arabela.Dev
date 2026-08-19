import { useState } from 'react';
import type { CaseContent } from '../../content/types';
import BrowserMockup from '../ui/BrowserMockup';
import Eyebrow from '../ui/Eyebrow';
import MetricStat from '../ui/MetricStat';
import SectionHeading from '../ui/SectionHeading';
import SectionShell from '../ui/SectionShell';

interface CaseSectionProps {
  content: CaseContent;
}

const CASES_DATA = [
  {
    id: 'fones-pro',
    title: 'Fones Pro E-commerce',
    eyebrow: 'Case de Sucesso • E-Commerce',
    context:
      'Reformulação completa da landing page e fluxo de checkout para e-commerce de eletrônicos de alto padrão, reduzindo o tempo de carregamento e eliminando fricção na decisão de compra.',
    metrics: [
      { value: '+340%', label: 'Aumento nas vendas relâmpago' },
      { value: '42%', label: 'Taxa de conversão de leads' },
      { value: '0,38s', label: 'Tempo total de carregamento' },
    ],
  },
  {
    id: 'nexus-saas',
    title: 'Nexus SaaS Dashboard',
    eyebrow: 'Case de Sucesso • Sistema Web',
    context:
      'Desenvolvimento de plataforma analítica corporativa com painéis interativos em tempo real, reduzindo drasticamente o tempo gasto em geração de relatórios operacionais.',
    metrics: [
      { value: '15h/sem', label: 'Economia por gestor' },
      { value: '99,9%', label: 'Uptime garantido' },
      { value: '100%', label: 'Satisfação das equipes' },
    ],
  },
  {
    id: 'bistro-arte',
    title: 'Bistrô Sabor & Arte',
    eyebrow: 'Case de Sucesso • Cardápio Digital',
    context:
      'Criação de cardápio digital otimizado com fotos em alta definição e checkout integrado diretamente com o WhatsApp do restaurante.',
    metrics: [
      { value: '+85%', label: 'Pedidos delivery diretos' },
      { value: '0.4s', label: 'Carregamento mobile' },
      { value: '5.0★', label: 'Avaliação dos clientes' },
    ],
  },
];

/** Seção 7. Fundo escuro em largura total com múltiplos cases. */
const CaseSection = ({ content }: CaseSectionProps) => {
  const [activeCaseId, setActiveCaseId] = useState<string>('fones-pro');
  const activeCase = CASES_DATA.find(c => c.id === activeCaseId) || {
    id: 'fones-pro',
    title: content.client,
    eyebrow: content.eyebrow,
    context: content.context,
    metrics: content.metrics,
  };

  return (
    <SectionShell id="cases" surface="dark" labelledBy="case-title">
      {/* Selector de Cases */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        {CASES_DATA.map(c => {
          const isActive = c.id === activeCaseId;
          return (
            <button
              key={c.id}
              onClick={() => setActiveCaseId(c.id)}
              type="button"
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all border ${
                isActive
                  ? 'bg-amber-500 border-amber-400 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              {c.title}
            </button>
          );
        })}
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <Eyebrow onDark>{activeCase.eyebrow}</Eyebrow>

          <SectionHeading id="case-title" size="md" onDark>
            {activeCase.title}
          </SectionHeading>

          <p className="max-w-lg text-base leading-relaxed text-ink-inverse-muted">
            {activeCase.context}
          </p>

          <hr className="my-2 border-0 border-t border-hairline-dark" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {activeCase.metrics.map(metric => (
              <MetricStat
                key={metric.label}
                value={metric.value}
                label={metric.label}
                tone="accent"
                size="lg"
              />
            ))}
          </div>
        </div>

        <BrowserMockup tone="dark" />
      </div>
    </SectionShell>
  );
};

export default CaseSection;
