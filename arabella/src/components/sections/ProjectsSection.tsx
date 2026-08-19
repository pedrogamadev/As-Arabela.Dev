import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle, Sparkles, X } from 'lucide-react';
import type { ProjectsContent, ProjectEntry } from '../../content/types';
import SectionShell from '../ui/SectionShell';

interface ProjectsSectionProps {
  content: ProjectsContent;
}

const CATEGORIES = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'e-commerce', label: 'E-commerce' },
  { id: 'landing-page', label: 'Landing Pages' },
  { id: 'sistema', label: 'Sistemas Sob Medida' },
  { id: 'branding', label: 'Branding & Portfólios' },
];

const ProjectsSection = ({ content }: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectEntry | null>(null);

  const filteredProjects = content.projects.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <SectionShell id="projetos" surface="alt" labelledBy="projetos-title">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Casos Reais & Protótipos</span>
          </div>
          <h2
            id="projetos-title"
            className="text-2xl md:text-3xl font-display font-semibold text-ink tracking-tight"
          >
            {content.heading}
          </h2>
        </div>

        {/* Abas de Navegação por Categoria */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-sm font-semibold'
                    : 'bg-surface-raised text-ink-muted hover:text-ink border border-hairline hover:border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de Cards dos Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-xl border border-hairline bg-surface-raised overflow-hidden shadow-xs transition-all duration-300 hover:shadow-xl hover:border-amber-400/60 flex flex-col justify-between"
            >
              <div>
                {/* Imagem de Capa do Projeto */}
                {project.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-stone-100 border-b border-hairline">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-stone-200 shadow-xs text-[10px] font-bold text-stone-700 uppercase tracking-wider">
                      {project.status}
                    </div>
                  </div>
                )}

                {/* Detalhes e Conteúdo do Card */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-ink group-hover:text-amber-600 transition-colors flex items-center gap-1.5">
                      {project.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />
                    </h3>
                  </div>

                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Badges de Tecnologias */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[9px] font-mono text-stone-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Rodapé do Card com Resultado/Ação */}
              <div className="px-5 py-3 bg-stone-50/80 border-t border-hairline flex items-center justify-between text-[11px] text-ink-muted">
                {project.results ? (
                  <span className="font-semibold text-emerald-600 flex items-center gap-1 truncate">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.results}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-stone-400">
                    <Layers className="w-3.5 h-3.5" /> Clique para detalhes
                  </span>
                )}
                <span className="text-amber-600 font-bold group-hover:translate-x-0.5 transition-transform">Ver case →</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footnote */}
      <p className="mt-8 text-sm text-ink-muted flex items-center gap-1">
        {content.footnote.lead}
        <Link to={content.footnote.href} className="text-amber-600 font-medium underline underline-offset-4 hover:text-amber-700">
          {content.footnote.linkLabel}
        </Link>
        {content.footnote.trail}
      </p>

      {/* Modal de Detalhes Completo do Projeto */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200/80"
            >
              {/* Imagem no topo do Modal */}
              {activeProject.image && (
                <div className="relative h-56 w-full bg-stone-900">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                        {activeProject.category || 'PROJETO'}
                      </span>
                      <h3 className="text-xl font-bold mt-1">{activeProject.name}</h3>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {activeProject.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Corpo do Modal */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-stone-700 leading-relaxed">
                  {activeProject.fullDescription || activeProject.description}
                </p>

                {activeProject.results && (
                  <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200/60 flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-950 block">Resultado Obtido</span>
                      <span className="text-xs text-emerald-800">{activeProject.results}</span>
                    </div>
                  </div>
                )}

                {/* Stacks Tecnológicas */}
                {activeProject.technologies && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map(tech => (
                        <span
                          key={tech}
                          className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ações */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    Fechar
                  </button>
                  <div className="flex items-center gap-3">
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                      >
                        Visualizar Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href="#planos"
                      onClick={() => setActiveProject(null)}
                      className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-xs shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      Solicitar Orçamento
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
};

export default ProjectsSection;
