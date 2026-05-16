import type { Project, ProjectStatus } from "../data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
};

const statusClasses: Record<ProjectStatus, string> = {
  "In progress": "border-research-cyan/30 bg-research-cyan/10 text-research-blue",
  "Research code": "border-sand-300/60 bg-sand-100/70 text-sand-500",
  "Coming soon": "border-graphite-200 bg-graphite-50 text-graphite-600"
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-graphite-200 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-[20rem] font-serif text-xl font-semibold text-graphite-950">
          {project.title}
        </h3>
        <span
          className={`rounded-md border px-2.5 py-1 text-xs font-semibold ${statusClasses[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-7 text-graphite-600">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-6 flex gap-3 border-t border-graphite-100 pt-4">
        <a
          href={project.githubUrl}
          className="text-sm font-semibold text-research-blue hover:text-graphite-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-research-cyan"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          className="text-sm font-semibold text-research-blue hover:text-graphite-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-research-cyan"
        >
          Demo
        </a>
      </div>
    </article>
  );
}
