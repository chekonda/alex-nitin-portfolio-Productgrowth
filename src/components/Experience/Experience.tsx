import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Award, Briefcase, ChevronDown, MapPin } from 'lucide-react'
import { experience, type ExperienceEntry } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Badge } from '@/components/UI/Badge'
import { Reveal } from '@/components/UI/Reveal'
import { cn } from '@/lib/utils'

// Only the first two responsibilities show by default — the rest reveal on
// hover (desktop) or tap (touch), so each card stays compact while still
// scanning as fully detailed once you engage with it.
const VISIBLE_COUNT = 2

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Product growth, digital marketing & D2C e-commerce experience, backed by a structured, analytical foundation in cloud engineering."
        />

        <ol className="relative mt-14 space-y-10 border-l border-ink-800 pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <ExperienceCard key={role.id} role={role} index={i} />
          ))}
        </ol>
      </Container>
    </section>
  )
}

function ExperienceCard({ role, index }: { role: ExperienceEntry; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const visiblePoints = role.responsibilities.slice(0, VISIBLE_COUNT)
  const hiddenPoints = role.responsibilities.slice(VISIBLE_COUNT)
  const hasMore = hiddenPoints.length > 0

  return (
    <Reveal as="li" delay={index * 0.08} className="relative">
      <span className="absolute -left-[calc(2rem+1px)] top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-ink-700 bg-ink-900 text-accent-300 sm:-left-[calc(2.5rem+1px)]">
        <Briefcase size={14} strokeWidth={2} />
      </span>

      <motion.div
        onHoverStart={() => setExpanded(true)}
        onHoverEnd={() => setExpanded(false)}
        onClick={() => setExpanded((v) => !v)}
        animate={{ scale: expanded ? 1.02 : 1, y: expanded ? -4 : 0 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={cn(
          'relative z-0 cursor-pointer rounded-2xl border bg-ink-900/40 p-6 transition-colors duration-300 sm:p-7',
          expanded
            ? 'z-10 border-accent-500/50 bg-ink-900/70 shadow-[0_0_50px_-16px_var(--color-accent-500)]'
            : 'border-ink-800 hover:border-ink-600',
        )}
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
          {visiblePoints.map((point, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-300">
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-500" aria-hidden="true" />
              {point}
            </li>
          ))}
          <AnimatePresence initial={false}>
            {expanded &&
              hiddenPoints.map((point, idx) => (
                <motion.li
                  key={`extra-${idx}`}
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-2.5 overflow-hidden text-sm leading-relaxed text-ink-300"
                >
                  <span
                    className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-500"
                    aria-hidden="true"
                  />
                  {point}
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>

        {hasMore ? (
          <p className="mt-3 flex items-center gap-1 text-xs font-medium text-accent-300">
            {expanded ? 'Show less' : `+${hiddenPoints.length} more`}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <ChevronDown size={13} />
            </motion.span>
          </p>
        ) : null}

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
  )
}
