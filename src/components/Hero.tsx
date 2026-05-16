import { profile } from "../data/profile";
import { Button } from "./Button";
import { ContactNetworkGraphic } from "./ContactNetworkGraphic";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-graphite-200 bg-sand-50"
    >
      <ContactNetworkGraphic />
      <div className="relative mx-auto flex min-h-[82vh] max-w-6xl flex-col justify-center px-5 pb-14 pt-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-research-blue">
            {profile.title}
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-graphite-950 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-graphite-800 sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-graphite-600 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#research">View Research</Button>
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
            <Button href={profile.cvPath} variant="secondary">
              Download CV
            </Button>
            <Button href="#contact" variant="ghost">
              Contact
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.acronym.map((item) => (
            <div
              key={`${item.letter}-${item.text}`}
              className="rounded-lg border border-graphite-200 bg-white/72 p-4 shadow-soft backdrop-blur-sm"
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
