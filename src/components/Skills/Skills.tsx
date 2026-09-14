import { motion } from 'motion/react'
import { BarChart3, Cloud, Megaphone, ShoppingBag, TrendingUp } from 'lucide-react'
import { skillCategories, type SkillCategory } from '@/data/portfolio'
import { skillIconMap } from '@/lib/skillIcons'
import { Container } from '@/components/UI/Container'
import { SectionHeading } from '@/components/UI/SectionHeading'
import { Reveal } from '@/components/UI/Reveal'

const categoryIcon: Record<SkillCategory['accent'], typeof Cloud> = {
  fuchsia: TrendingUp,
  amber: Megaphone,
  teal: BarChart3,
  emerald: ShoppingBag,
  azure: Cloud,
}

// Full literal Tailwind class strings per accent — written out (not built
// with template interpolation) so Tailwind's scanner can pick them up.
const accentStyles: Record<
  SkillCategory['accent'],
  {
    badgeBg: string
    badgeBorder: string
    badgeText: string
    chipBorder: string
    chipHoverBorder: string
    chipBg: string
    cardHoverBorder: string
    glow: string
    blob: string
  }
> = {
  azure: {
    badgeBg: 'bg-azure-500/15',
    badgeBorder: 'border-azure-500/30',
    badgeText: 'text-azure-300',
    chipBorder: 'border-azure-500/25',
    chipHoverBorder: 'hover:border-azure-400/70',
    chipBg: 'bg-azure-500/[0.06]',
    cardHoverBorder: 'hover:border-azure-500/40',
    glow: 'hover:shadow-[0_0_40px_-12px_var(--color-azure-500)]',
    blob: 'bg-azure-500/25',
  },
  amber: {
    badgeBg: 'bg-amber-500/15',
    badgeBorder: 'border-amber-500/30',
    badgeText: 'text-amber-300',
    chipBorder: 'border-amber-500/25',
    chipHoverBorder: 'hover:border-amber-400/70',
    chipBg: 'bg-amber-500/[0.06]',
    cardHoverBorder: 'hover:border-amber-500/40',
    glow: 'hover:shadow-[0_0_40px_-12px_var(--color-amber-500)]',
    blob: 'bg-amber-500/25',
  },
  fuchsia: {
    badgeBg: 'bg-fuchsia-500/15',
    badgeBorder: 'border-fuchsia-500/30',
    badgeText: 'text-fuchsia-300',
    chipBorder: 'border-fuchsia-500/25',
    chipHoverBorder: 'hover:border-fuchsia-400/70',
    chipBg: 'bg-fuchsia-500/[0.06]',
    cardHoverBorder: 'hover:border-fuchsia-500/40',
    glow: 'hover:shadow-[0_0_40px_-12px_var(--color-fuchsia-500)]',
    blob: 'bg-fuchsia-500/25',
  },
  teal: {
    badgeBg: 'bg-teal-500/15',
    badgeBorder: 'border-teal-500/30',
    badgeText: 'text-teal-300',
    chipBorder: 'border-teal-500/25',
    chipHoverBorder: 'hover:border-teal-400/70',
    chipBg: 'bg-teal-500/[0.06]',
    cardHoverBorder: 'hover:border-teal-500/40',
    glow: 'hover:shadow-[0_0_40px_-12px_var(--color-teal-500)]',
    blob: 'bg-teal-500/25',
  },
  emerald: {
    badgeBg: 'bg-emerald-500/15',
    badgeBorder: 'border-emerald-500/30',
    badgeText: 'text-emerald-300',
    chipBorder: 'border-emerald-500/25',
    chipHoverBorder: 'hover:border-emerald-400/70',
    chipBg: 'bg-emerald-500/[0.06]',
    cardHoverBorder: 'hover:border-emerald-500/40',
    glow: 'hover:shadow-[0_0_40px_-12px_var(--color-emerald-500)]',
    blob: 'bg-emerald-500/25',
  },
}

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      {/* Colorful ambient backdrop — the whole point is that this section should NOT read as flat/dark like the rest of the page */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-[8%] top-0 h-72 w-72 rounded-full bg-azure-500/20 blur-[110px]" />
        <div className="absolute right-[10%] top-10 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-[110px]" />
        <div className="absolute bottom-0 left-[30%] h-72 w-72 rounded-full bg-amber-500/10 blur-[110px]" />
        <div className="absolute bottom-10 right-[25%] h-56 w-56 rounded-full bg-teal-500/15 blur-[110px]" />
        <div className="bg-grain absolute inset-0 opacity-40" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Grouped by how I actually use them — product growth and digital marketing first, cloud engineering close behind."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, i) => {
            const CategoryIcon = categoryIcon[category.accent]
            const styles = accentStyles[category.accent]
            const isLast = i === skillCategories.length - 1
            return (
              <Reveal
                key={category.title}
                delay={i * 0.06}
                className={isLast ? 'lg:col-span-2' : undefined}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className={`h-full rounded-2xl border border-ink-800 bg-ink-900/50 p-6 backdrop-blur-sm transition-colors duration-300 ${styles.cardHoverBorder} ${styles.glow}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border ${styles.badgeBorder} ${styles.badgeBg} ${styles.badgeText} animate-float`}
                    >
                      <CategoryIcon size={18} strokeWidth={2} />
                    </span>
                    <h3 className="text-sm font-semibold text-ink-50">{category.title}</h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const iconEntry = skillIconMap[skill]
                      return (
                        <motion.li
                          key={skill}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                          className={`flex items-center gap-1.5 rounded-full border ${styles.chipBorder} ${styles.chipBg} ${styles.chipHoverBorder} px-3 py-1.5 text-xs font-medium text-ink-200 transition-colors`}
                        >
                          {iconEntry ? (
                            <iconEntry.Icon size={13} color={iconEntry.color} />
                          ) : null}
                          {skill}
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
