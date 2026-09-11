import { motion } from 'motion/react'
import { Award, GraduationCap } from 'lucide-react'
import { certifications, education } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Reveal } from '@/components/UI/Reveal'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background & certifications" />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="flex h-full flex-col gap-5 rounded-2xl border border-ink-800 bg-ink-900/40 p-6 transition-colors hover:border-ink-600 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-ink-700 bg-ink-950 text-accent-300">
                <GraduationCap size={22} strokeWidth={2} />
              </span>
              <div>
                <p className="text-base font-semibold text-ink-50">{education.institution}</p>
                <p className="mt-1 text-sm text-ink-300">
                  {education.degree} — {education.field}
                </p>
                <p className="mt-2 font-mono text-xs text-ink-400">{education.detail}</p>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Award size={16} className="text-amber-400" />
                <h3 className="text-sm font-semibold text-ink-50">Certifications</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <motion.li
                    key={cert.name}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="flex items-baseline justify-between gap-3 border-b border-ink-800 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-ink-100">{cert.name}</span>
                    <span className="flex-none font-mono text-xs text-ink-500">{cert.issuer}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
