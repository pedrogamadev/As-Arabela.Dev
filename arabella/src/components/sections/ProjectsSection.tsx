import { Link } from 'react-router-dom';
import type { ProjectsContent } from '../../content/types';
import SectionShell from '../ui/SectionShell';

interface ProjectsSectionProps {
  content: ProjectsContent;
}

/**
 * Seção 9. Lista vertical de baixa densidade.
 *
 * A hierarquia tipográfica é deliberadamente menor que a das demais
 * seções: esta lista não pode competir visualmente com a de planos.
 */
const ProjectsSection = ({ content }: ProjectsSectionProps) => (
  <SectionShell surface="alt" labelledBy="projetos-title">
    <h2
      id="projetos-title"
      className="text-sm font-medium uppercase tracking-eyebrow text-ink-muted"
    >
      {content.heading}
    </h2>

    <ul className="mt-6 border-t border-hairline">
      {content.projects.map(project => (
        <li
          key={project.name}
          className="flex flex-col gap-1 border-b border-hairline py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-base text-ink">{project.name}</span>
            <span className="text-sm text-ink-muted">{project.description}</span>
          </div>
          <span className="flex-none text-xs uppercase tracking-eyebrow text-ink-muted">
            {project.status}
          </span>
        </li>
      ))}
    </ul>

    <p className="mt-6 text-sm text-ink-muted">
      {content.footnote.lead}
      <Link to={content.footnote.href} className="text-ink underline underline-offset-4">
        {content.footnote.linkLabel}
      </Link>
      {content.footnote.trail}
    </p>
  </SectionShell>
);

export default ProjectsSection;
