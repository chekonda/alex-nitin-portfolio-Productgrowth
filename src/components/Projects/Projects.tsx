import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Badge } from '@/components/UI/Badge'
import { Reveal } from '@/components/UI/Reveal'
import projectClock from '@/assets/images/project-clock.webp'
import projectTodo from '@/assets/images/project-todo.webp'
import projectWeather from '@/assets/images/project-weather.webp'

const images: Record<Project['image'], string> = {
  clock: projectClock,
  todo: projectTodo,
  weather: projectWeather,
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="A few things I've built"
          description="Small, deployed projects — each one live and open to click around."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-ink-600"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
                  <img
                    src={images[project.image]}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-ink-50">{project.name}</h3>
                    <ArrowUpRight
                      size={18}
                      className="flex-none text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
