import type { Project, ProjectStatus } from "../data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const statusClasses: Record<ProjectStatus, string> = {
  Workflow: "border-research-cyan/30 bg-research-cyan/10 text-research-blue",
  "Model study": "border-sand-300/60 bg-sand-100/70 text-sand-500",
  Pipeline: "border-graphite-200 bg-graphite-50 text-graphite-600",
  "Surrogate modelling": "border-research-blue/25 bg-research-blue/10 text-research-blue",
  Dynamics: "border-sand-300/60 bg-sand-100/70 text-sand-500",
  Descriptors: "border-graphite-200 bg-white text-graphite-600"
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const projectLinks = [
    project.githubUrl ? { label: "GitHub", href: project.githubUrl } : null,
    project.demoUrl ? { label: "Demo", href: project.demoUrl } : null
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <article className="flex h-full flex-col border-t border-graphite-200 bg-white px-1 py-7 sm:grid sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
      <div className="mb-4 font-mono text-sm font-medium text-sand-500 sm:mb-0">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="max-w-[34rem] font-serif text-2xl font-semibold leading-tight text-graphite-950">
            {project.title}
          </h3>
          <span
            className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${statusClasses[project.status]}`}
          >
            {project.status}
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-graphite-600">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {projectLinks.length > 0 ? (
          <div className="mt-6 flex gap-3 border-t border-graphite-100 pt-4">
            {projectLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-research-blue hover:text-graphite-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-research-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
