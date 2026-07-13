import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { PublicationItem } from "./components/PublicationItem";
import { ResearchCard } from "./components/ResearchCard";
import { SectionHeading } from "./components/SectionHeading";
import { Button } from "./components/Button";
import { Tag } from "./components/Tag";
import { contactLinks } from "./data/links";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { publicationNote, publications } from "./data/publications";
import { researchAreas } from "./data/research";

function App() {
  return (
    <div className="min-h-screen bg-sand-50 text-graphite-900">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="About"
              title="Particle-scale mechanics to continuum response"
              description="A concise academic profile focused on mechanics, modelling, and simulation."
            />
            <div className="space-y-5 text-base leading-8 text-graphite-700">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="scroll-mt-24 border-b border-graphite-200 bg-sand-50 px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Research"
              title="Research areas"
              description="Themes spanning granular materials, DEM simulations, contact mechanics, constitutive response, and data-driven modelling."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {researchAreas.map((area) => (
                <ResearchCard key={area.title} area={area} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Projects"
              title="Research code and workflows"
              description="Version 1 project placeholders for simulation workflows, analysis pipelines, and model comparison tools."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="publications"
          className="scroll-mt-24 border-b border-graphite-200 bg-sand-50 px-5 py-20"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Publications"
              title="Publications and preprints"
              description={publicationNote}
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {publications.map((publication) => (
                <PublicationItem key={publication.title} publication={publication} />
              ))}
            </div>
          </div>
        </section>

        <section id="cv" className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeading
                eyebrow="CV"
                title="Academic CV"
                description="A brief summary of education, research interests, and technical skills."
              />
              <Button href={profile.cvPath}>Download CV</Button>
            </div>

            <div className="grid gap-6">
              <div className="rounded-lg border border-graphite-200 bg-sand-50 p-5">
                <h3 className="font-serif text-xl font-semibold text-graphite-950">
                  Education
                </h3>
                <div className="mt-4 space-y-5">
                  {profile.education.map((item) => (
                    <div key={item.degree} className="border-l-2 border-sand-300 pl-4">
                      <p className="font-semibold text-graphite-900">{item.degree}</p>
                      <p className="mt-1 text-sm text-graphite-700">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-graphite-600">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-graphite-200 bg-sand-50 p-5">
                  <h3 className="font-serif text-xl font-semibold text-graphite-950">
                    Research interests
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.researchInterests.map((interest) => (
                      <Tag key={interest}>{interest}</Tag>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-graphite-200 bg-sand-50 p-5">
                  <h3 className="font-serif text-xl font-semibold text-graphite-950">
                    Technical skills
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.technicalSkills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-sand-50 px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Contact"
              title="Academic links"
              description="Use email for direct contact, or follow academic and professional profile links below."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg border border-graphite-200 bg-white p-5 shadow-soft transition-colors hover:border-research-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-research-cyan"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-graphite-500">
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
