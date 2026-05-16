type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-research-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold text-graphite-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-graphite-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
