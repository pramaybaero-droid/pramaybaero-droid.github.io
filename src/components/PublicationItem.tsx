import type { Publication } from "../data/publications";

type PublicationItemProps = {
  publication: Publication;
};

export function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <article className="border-t border-graphite-200 bg-white px-1 py-7 sm:grid sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-7">
      <div className="mb-4 sm:mb-0">
        <p className="font-mono text-sm font-medium text-sand-500">
          {publication.year}
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-graphite-400">
          {publication.status}
        </p>
      </div>

      <div>
        <p className="text-sm font-medium text-research-blue">
          {publication.venue}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-graphite-950">
          {publication.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-graphite-700">
          {publication.authors}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-graphite-600">
          {publication.note}
        </p>
        {publication.links.length > 0 ? (
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
        ) : null}
      </div>
    </article>
  );
}
