import type { ResearchArea } from "../data/research";
import { Tag } from "./Tag";

type ResearchCardProps = {
  area: ResearchArea;
};

export function ResearchCard({ area }: ResearchCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-graphite-200 bg-white p-5 shadow-soft">
      <h3 className="font-serif text-xl font-semibold text-graphite-950">
        {area.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-graphite-600">
        {area.description}
      </p>
      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
          Keywords
        </p>
        <div className="flex flex-wrap gap-2">
          {area.keywords.map((keyword) => (
            <Tag key={keyword}>{keyword}</Tag>
          ))}
        </div>
      </div>
      <div className="mt-5 border-t border-graphite-100 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
          Representative methods
        </p>
        <p className="mt-2 text-sm leading-6 text-graphite-700">
          {area.methods.join(" / ")}
        </p>
      </div>
    </article>
  );
}
