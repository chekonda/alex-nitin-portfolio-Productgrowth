import { motion } from 'motion/react'
import { Download, Mail } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { Button } from '@/components/UI/Button'
import { GithubIcon, LinkedinIcon } from '@/components/UI/BrandIcons'
import { TechMarquee } from '@/components/UI/TechMarquee'
import heroImage from '@/assets/images/hero.webp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* Ambient background: restrained radial gradients, no neon */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-ink-950" />
        <motion.div
          className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-azure-500/20 blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10rem] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/10 blur-[120px]"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="bg-grain absolute inset-0 opacity-60" />
      </div>

      <Container className="flex flex-1 items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3.5 py-1.5 text-xs font-medium text-ink-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </motion.p>

            <motion.p variants={item} className="mt-6 text-lg text-ink-300">
              Hi, I&apos;m {profile.name} <span aria-hidden="true">👋</span>
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] text-ink-50 sm:text-5xl lg:text-[3.4rem]"
            >
              <span className="bg-gradient-to-r from-azure-400 via-accent-300 to-fuchsia-400 bg-clip-text text-transparent">
                {profile.title}
              </span>
            </motion.h1>
            <motion.p variants={item} className="mt-2 text-lg font-medium text-ink-300 sm:text-xl">
              {profile.subtitle}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-300"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={profile.resumeFile} download>
                Download Resume
                <Download size={16} />
              </Button>
              <Button href="#contact" variant="secondary" onClick={scrollTo('#contact')}>
                Get in touch
              </Button>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-4">
              <SocialLink href={profile.socials.github} label="GitHub profile">
                <GithubIcon width={18} height={18} />
              </SocialLink>
              <SocialLink href={profile.socials.linkedin} label="LinkedIn profile">
                <LinkedinIcon width={18} height={18} />
              </SocialLink>
              <SocialLink href={profile.socials.email} label="Send an email">
                <Mail size={18} />
              </SocialLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ink-700 bg-ink-900 shadow-2xl shadow-black/40">
              <img
                src={heroImage}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
                width={900}
                height={1188}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>
            <div
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-ink-700 bg-ink-900/90 px-4 py-3 backdrop-blur-md sm:block"
              aria-hidden="true"
            >
              <p className="text-xs uppercase tracking-wide text-ink-400">Based in</p>
              <p className="text-sm font-medium text-ink-100">{profile.location}</p>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="relative mt-16 sm:mt-20">
        <TechMarquee />
      </div>
    </section>
  )
}

function scrollTo(href: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-white"
    >
      {children}
    </a>
  )
}
