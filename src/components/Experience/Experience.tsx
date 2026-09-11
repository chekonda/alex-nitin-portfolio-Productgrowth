import { motion } from 'motion/react'
import { Award, Briefcase, MapPin } from 'lucide-react'
import { experience } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Badge } from '@/components/UI/Badge'
import { Reveal } from '@/components/UI/Reveal'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Cloud capacity & incident management, backed by a prior run in digital operations and analytics."
        />

        <ol className="relative mt-14 space-y-10 border-l border-ink-800 pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <Reveal as="li" key={role.id} delay={i * 0.08} className="relative">
              <span className="absolute -left-[calc(2rem+1px)] top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-accent-300 sm:-left-[calc(2.5rem+1px)]">
                <Briefcase size={14} strokeWidth={2} />
              </span>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="rounded-2xl border border-ink-800 bg-ink-900/40 p-6 transition-colors duration-300 hover:border-ink-600 hover:shadow-[0_0_40px_-16px_var(--color-accent-500)] sm:p-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink-50">{role.role}</h3>
                  <span className="font-mono text-xs text-ink-400">{role.duration}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent-300">{role.company}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin size={12} />
                  {role.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">{role.summary}</p>

                <ul className="mt-4 space-y-2">
                  {role.responsibilities.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
                      <span
                        className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-500"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                {role.recognition ? (
                  <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-4 py-3 text-sm text-amber-200">
                    <Award size={16} className="mt-0.5 flex-none text-amber-400" />
                    <span>{role.recognition}</span>
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
