import { GraduationCap } from 'lucide-react'
import { education } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Reveal } from '@/components/UI/Reveal'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <Reveal delay={0.1} className="mt-10 max-w-2xl">
          <div className="flex flex-col gap-5 rounded-2xl border border-ink-800 bg-ink-900/40 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-ink-700 bg-ink-950 text-accent-300">
              <GraduationCap size={22} strokeWidth={2} />
            </span>
            <div>
              <p className="text-base font-semibold text-ink-50">{education.institution}</p>
              <p className="mt-1 text-sm text-ink-300">
                {education.degree} — {education.field}
              </p>
              <p className="mt-2 font-mono text-xs text-ink-400">{education.duration}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
