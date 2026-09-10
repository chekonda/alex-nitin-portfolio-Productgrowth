import { Reveal } from '@/components/UI/Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-balance text-ink-50 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-300">{description}</p>
      ) : null}
    </Reveal>
  )
}
