import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { PublicationItem } from "./components/PublicationItem";
import { SectionHeading } from "./components/SectionHeading";
import { Tag } from "./components/Tag";
import { contactLinks } from "./data/links";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { publicationNote, publications } from "./data/publications";
import { talks } from "./data/talks";

function App() {
  return (
    <div className="min-h-screen bg-sand-50 text-graphite-900">
      <Navbar />
      <main>
        <Hero />

        <section
          id="about"
          className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading
              eyebrow="About"
              title="Particle-scale mechanics to continuum response"
              description="Doctoral research in computational granular mechanics, contact models, and DEM-calibrated constitutive modelling."
            />
            <div className="space-y-6 text-base leading-8 text-graphite-700">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="border-l-2 border-sand-300 pl-5">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-graphite-400">
                  Thesis
                </p>
                <p className="mt-2 font-serif text-2xl font-semibold leading-snug text-graphite-950">
                  {profile.thesisTitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="threads"
          className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Research"
              title="Research threads"
              description="A connected audit trail from DEM model setup to constitutive laws, surrogate models, and microstructural descriptors."
            />
            <div className="border-b border-graphite-200">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="publications"
          className="scroll-mt-24 border-b border-graphite-200 bg-sand-50 px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Papers"
                title="Papers and manuscripts"
                description={publicationNote}
              />
              <div className="mb-8 flex gap-4 text-sm font-semibold text-research-blue">
                <a href="https://scholar.google.com/citations?user=w8A1gMUAAAAJ&hl=en">
                  Google Scholar
                </a>
                <a href="https://orcid.org/0000-0001-8151-9629">ORCID</a>
              </div>
            </div>
            <div className="border-b border-graphite-200 bg-white">
              {publications.map((publication) => (
                <PublicationItem
                  key={publication.title}
                  publication={publication}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="talks"
          className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Presentations"
              title="Conference presentations"
              description="Recent presentations connected to the published conference papers."
            />
            <div className="grid gap-px overflow-hidden border-y border-graphite-200 bg-graphite-200">
              {talks.map((talk) => (
                <article
                  key={talk.event}
                  className="grid gap-4 bg-white px-1 py-7 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-8"
                >
                  <div>
                    <p className="font-serif text-xl font-semibold text-graphite-950">
                      {talk.event}
                    </p>
                    <p className="mt-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-sand-500">
                      {talk.where}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-graphite-950">
                      {talk.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-graphite-600">
                      {talk.note}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cv"
          className="scroll-mt-24 border-b border-graphite-200 bg-sand-50 px-5 py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading
                eyebrow="CV"
                title="Education and skills"
                description="Academic background, research interests, and computational methods."
              />
              <Button href={profile.cvPath}>Download CV</Button>
            </div>

            <div className="grid gap-10">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-graphite-950">
                  Education and experience
                </h3>
                <div className="mt-5 divide-y divide-graphite-200 border-y border-graphite-200">
                  {profile.education.map((item) => (
                    <div
                      key={item.degree}
                      className="grid gap-2 py-5 md:grid-cols-[13rem_minmax(0,1fr)]"
                    >
                      <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-sand-500">
                        {item.institution}
                      </p>
                      <div>
                        <p className="font-semibold text-graphite-950">
                          {item.degree}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-graphite-600">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-graphite-950">
                    Research interests
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.researchInterests.map((interest) => (
                      <Tag key={interest}>{interest}</Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold text-graphite-950">
                    Methods and tools
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {profile.technicalSkills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Contact"
              title="Get in touch"
              description="Use email for direct contact, or follow academic and professional profile links."
            />
            <div className="grid gap-px overflow-hidden border border-graphite-200 bg-graphite-200 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="bg-white p-5 transition-colors hover:bg-sand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-research-cyan"
                >
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-graphite-400">
                    {link.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-research-blue">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
