import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrolled } from '@/hooks/useScrolled'
import { Container } from '@/components/UI/Container'
import { cn } from '@/lib/utils'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(12)
  const activeId = useActiveSection(sectionIds)

  const handleNavigate = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-ink-800 bg-ink-950/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          onClick={handleNavigate('#top')}
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-ink-50"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 bg-ink-900 text-xs font-bold text-accent-300 transition-colors group-hover:border-accent-400">
            {profile.initials}
          </span>
          <span className="hidden whitespace-nowrap sm:inline">{profile.shortName}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavigate(link.href)}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4',
                      isActive ? 'text-white' : 'text-ink-300 hover:text-white',
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink-800"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    ) : null}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href="#contact"
            onClick={handleNavigate('#contact')}
            className="whitespace-nowrap rounded-full border border-ink-600 bg-ink-900/60 px-4 py-2 text-sm font-medium text-ink-100 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-white"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-ink-50 px-4 py-2 text-sm font-medium text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-accent-glow"
          >
            <Download size={15} strokeWidth={2} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-100 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-md lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavigate(link.href)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-100 hover:bg-ink-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavigate('#contact')}
                className="mt-2 rounded-lg border border-ink-600 px-3 py-3 text-center text-base font-medium text-ink-100"
              >
                Get in touch
              </a>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-ink-50 px-3 py-3 text-center text-base font-medium text-ink-950"
              >
                <Download size={16} strokeWidth={2} />
                Download Resume
              </a>
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
