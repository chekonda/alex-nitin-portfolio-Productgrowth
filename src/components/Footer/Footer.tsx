import { Mail, Phone } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { Container } from '@/components/UI/Container'
import { GithubIcon, LinkedinIcon } from '@/components/UI/BrandIcons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-ink-100">{profile.name}</p>
          <p className="mt-1 text-xs text-ink-500">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterLink href={profile.socials.github} label="GitHub">
            <GithubIcon width={16} height={16} />
          </FooterLink>
          <FooterLink href={profile.socials.linkedin} label="LinkedIn">
            <LinkedinIcon width={16} height={16} />
          </FooterLink>
          <FooterLink href={profile.socials.email} label="Email">
            <Mail size={16} />
          </FooterLink>
          <FooterLink href={profile.socials.phone} label="Phone">
            <Phone size={16} />
          </FooterLink>
        </div>
      </Container>
    </footer>
  )
}

function FooterLink({
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-800 text-ink-400 transition-colors hover:border-ink-600 hover:text-white"
    >
      {children}
    </a>
  )
}
