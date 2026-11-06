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

              <div>
                <h3 className="font-serif text-2xl font-semibold text-graphite-950">
                  Doctoral coursework
                </h3>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  {profile.coursework.map((group) => (
                    <div key={group.category} className="border-t border-graphite-200 pt-4">
                      <h4 className="font-semibold text-graphite-950">
                        {group.category} courses
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-graphite-700">
                        {group.courses.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-graphite-950">
                  M.Tech. coursework — Machine Design
                </h3>
                <p className="mt-2 text-sm leading-7 text-graphite-600">
                  National Institute of Technology Raipur, 2014–2016.
                  Taught courses are separated from laboratory, project, and examination components.
                </p>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  {profile.mastersCoursework.map((semester) => (
                    <div key={semester.semester} className="border-t border-graphite-200 pt-4">
                      <h4 className="font-semibold text-graphite-950">
                        {semester.semester}
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-graphite-700">
                        {semester.courses.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-graphite-600">
                  <span className="font-semibold text-graphite-950">
                    Additional academic components:
                  </span>{" "}
                  {profile.mastersPracticalComponents.join("; ")}.
                </p>
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
                    Software and methods
                  </h3>
                  <div className="mt-5 space-y-5">
                    {profile.softwareGroups.map((group) => (
                      <div key={group.label}>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-graphite-600">
                          {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.tools.map((tool) => (
                            <Tag key={tool}>{tool}</Tag>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div>
                      <p className="mb-2 text-xs font-semibold tracking-wide text-graphite-600">
                        Methods and research workflows
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {profile.technicalSkills.map((skill) => (
                          <Tag key={skill}>{skill}</Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="earlier-research" className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Earlier research · 2015–2016"
              title="M.Tech. thesis: experimental fatigue and fracture mechanics"
              description="Experimental materials research, distinct from doctoral DEM research and separate CAD/FEM design-laboratory projects."
            />
            <div>
              <h3 className="font-serif text-2xl font-semibold leading-snug text-graphite-950">
                {profile.mtechThesis.title}
              </h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-sand-500">
                {profile.mtechThesis.institutions}
              </p>
              <p className="mt-3 text-sm leading-7 text-graphite-600">
                <span className="font-semibold text-graphite-950">Supervisors:</span>{" "}
                {profile.mtechThesis.supervisors}.
              </p>
              <p className="mt-5 text-sm leading-7 text-graphite-700">{profile.mtechThesis.objective}</p>
              <p className="mt-4 text-sm leading-7 text-graphite-700">
                <span className="font-semibold text-graphite-950">Methods:</span>{" "}
                {profile.mtechThesis.methods}
              </p>
              <h4 className="mt-6 font-semibold text-graphite-950">Selected findings</h4>
              <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-7 text-graphite-700">
                {profile.mtechThesis.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
              </ul>
              <p className="mt-4 text-xs leading-6 text-graphite-500">
                Source: M.Tech. thesis (2016), experimental methods and Chapter 5 conclusions.
              </p>
            </div>
          </div>
        </section>

        <section id="earlier-projects" className="scroll-mt-24 border-b border-graphite-200 bg-sand-50 px-5 py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Earlier engineering"
              title="CAD/FEM projects and industrial training"
              description="Undergraduate and master's design projects and student industrial training, not professional engineering appointments."
            />
            <div className="space-y-9">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-graphite-950">Academic design projects</h3>
                <div className="mt-4 divide-y divide-graphite-200 border-y border-graphite-200">
                  {profile.earlierEngineeringProjects.map((item) => (
                    <article key={item.title} className="py-5">
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-sand-500">
                        {item.period} · {item.context}
                      </p>
                      <h4 className="mt-2 font-semibold text-graphite-950">{item.title}</h4>
                      <p className="mt-1 text-sm font-medium text-graphite-600">{item.tools}</p>
                      <p className="mt-2 text-sm leading-7 text-graphite-700">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-graphite-950">Student industrial training</h3>
                <div className="mt-4 divide-y divide-graphite-200 border-y border-graphite-200">
                  {profile.industrialTraining.map((item) => (
                    <article key={item.organization} className="py-5">
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-sand-500">{item.period}</p>
                      <h4 className="mt-2 font-semibold text-graphite-950">{item.organization}</h4>
                      <p className="mt-2 text-sm leading-7 text-graphite-700">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="training"
          className="scroll-mt-24 border-b border-graphite-200 bg-white px-5 py-20"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Training"
              title="Professional training and certifications"
              description="Short courses and certificates, listed separately from formal degree coursework."
            />
            <div className="divide-y divide-graphite-200 border-y border-graphite-200">
              {profile.professionalTraining.map((item) => (
                <article key={item.title} className="py-6">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-sand-500">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-graphite-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-graphite-700">
                    {item.provider}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-graphite-600">
                    {item.detail}
                  </p>
                </article>
              ))}
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
