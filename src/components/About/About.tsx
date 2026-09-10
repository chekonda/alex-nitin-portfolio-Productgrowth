import { profile } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Reveal } from '@/components/UI/Reveal'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="About" title="A quick introduction" />
            <div className="mt-6 space-y-4">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p className="text-base leading-relaxed text-ink-300">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {profile.strengths.map((strength, i) => (
              <Reveal as="li" key={strength.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-ink-800 bg-ink-900/40 p-5 transition-colors duration-300 hover:border-ink-600 hover:bg-ink-900/70">
                  <p className="text-sm font-semibold text-ink-50">{strength.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {strength.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
