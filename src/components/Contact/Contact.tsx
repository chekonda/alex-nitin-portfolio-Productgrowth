import { ArrowRight, Mail, Phone } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { Reveal } from '@/components/UI/Reveal'
import { Button } from '@/components/UI/Button'
import { GithubIcon, LinkedinIcon } from '@/components/UI/BrandIcons'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-ink-800 bg-ink-900/40 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-600/15 via-transparent to-sky-400/10"
            aria-hidden="true"
          />
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold text-ink-50 sm:text-4xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-ink-300">
            {profile.availability}. If you&apos;re hiring for frontend, web operations or
            project-management-adjacent roles, I&apos;d like to hear from you.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={profile.socials.email}>
              Email me
              <ArrowRight size={16} />
            </Button>
            <Button
              href={profile.socials.linkedin}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-300">
            <ContactRow
              href={profile.socials.email}
              icon={<Mail size={15} />}
              label={profile.email}
            />
            <ContactRow
              href={profile.socials.phone}
              icon={<Phone size={15} />}
              label={profile.phone}
            />
            <ContactRow
              href={profile.socials.github}
              icon={<GithubIcon width={15} height={15} />}
              label="github.com/chekonda"
              external
            />
            <ContactRow
              href={profile.socials.linkedin}
              icon={<LinkedinIcon width={15} height={15} />}
              label="linkedin.com/in/alexnitin"
              external
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function ContactRow({
  href,
  icon,
  label,
  external,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex items-center gap-2 transition-colors hover:text-white"
    >
      <span className="text-ink-400">{icon}</span>
      {label}
    </a>
  )
}
