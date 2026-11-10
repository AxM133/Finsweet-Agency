import type { ComponentProps } from 'react'

import { cn } from '@/shared/lib'

import { Container } from '../container'

const tones = {
  white: 'bg-white',
  mint: 'bg-mint',
  peach: 'bg-peach-soft',
  lavender: 'bg-lavender',
  surface: 'bg-surface',
  ink: 'bg-ink text-white',
} as const

type SectionProps = ComponentProps<'section'> & {
  tone?: keyof typeof tones
  containerClassName?: string
}

/** Full-width coloured band with the standard vertical rhythm and a Container inside. */
export function Section({ tone = 'white', className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section className={cn('scroll-mt-20 py-20 lg:py-28', tones[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
