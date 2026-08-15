import { profile } from "../data/profile";
import { Button } from "./Button";

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-graphite-200 bg-sand-50"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 border-b border-graphite-200 bg-white/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-24 sm:pt-28">
        <div className="grid min-h-[76vh] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,370px)]">
          <div className="max-w-4xl">
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-research-blue">
              {profile.title}
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-graphite-950 sm:text-6xl lg:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-graphite-800 sm:text-2xl">
              {profile.summary}
            </p>
            <p className="mt-6 max-w-3xl border-l-2 border-sand-300 pl-5 text-sm leading-7 text-graphite-600 sm:text-base">
              Thesis: {profile.thesisTitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#publications">Papers</Button>
              <Button href="#threads" variant="secondary">
                Research Threads
              </Button>
              <Button href={profile.cvPath} variant="secondary">
                Download CV
              </Button>
              <Button href="#contact" variant="ghost">
                Contact
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[20rem] lg:mx-0 lg:justify-self-end">
            <div className="relative border border-graphite-200 bg-white p-3 shadow-soft">
              <div className="aspect-[4/5] overflow-hidden bg-sand-100">
                {profile.photo.src ? (
                  <img
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label="Profile initials fallback"
                    className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-white via-sand-100 to-[#d8e6ea]"
                  >
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-graphite-900 font-serif text-5xl font-semibold text-white shadow-soft">
                      {initials}
                    </div>
                    <div className="mt-5 h-2 w-24 rounded-full bg-sand-300" aria-hidden="true" />
                    <div className="mt-3 h-2 w-16 rounded-full bg-research-cyan/55" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-graphite-100 pt-4">
                <div>
                  <p className="font-serif text-xl font-semibold text-graphite-950">
                    {profile.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-graphite-400">
                    Computational granular mechanics
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-graphite-900 font-serif text-lg font-semibold text-white">
                  PB
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 border-t border-graphite-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {profile.acronym.map((item) => (
            <div
              key={`${item.letter}-${item.text}`}
              className="border-l border-graphite-200 bg-white/50 p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-graphite-900 font-serif text-lg font-semibold text-white">
                  {item.letter}
                </span>
                <p className="text-sm leading-6 text-graphite-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
