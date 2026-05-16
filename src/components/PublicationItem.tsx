import type { Publication } from "../data/publications";

type PublicationItemProps = {
  publication: Publication;
};

export function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <article className="rounded-lg border border-graphite-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-medium text-graphite-500">
        {publication.year} | {publication.venue}
      </p>
      <h3 className="mt-2 font-serif text-xl font-semibold text-graphite-950">
        {publication.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-graphite-700">
        {publication.authors}
      </p>
      <p className="mt-2 text-sm leading-6 text-graphite-600">
        {publication.note}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {publication.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-md border border-graphite-200 bg-white px-3 py-1.5 text-xs font-semibold text-graphite-700 transition-colors hover:border-research-cyan hover:text-research-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-research-cyan"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
