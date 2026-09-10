import { Code2, LineChart, Wrench } from 'lucide-react'
import { skillCategories } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Reveal } from '@/components/UI/Reveal'

const icons = [Code2, LineChart, Wrench]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by how I actually use them, day to day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={category.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 bg-ink-950 text-accent-300">
                      <Icon size={16} strokeWidth={2} />
                    </span>
                    <h3 className="text-sm font-semibold text-ink-50">{category.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-ink-700 bg-ink-950/60 px-3 py-1.5 text-xs font-medium text-ink-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
