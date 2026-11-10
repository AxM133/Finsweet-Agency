import { cn } from '@/shared/lib'
import { Container, Heading, ImageReveal, Reveal } from '@/shared/ui'

import type { ServiceSectionData } from '../model/service-sections'

const tones = {
  white: 'bg-white',
  mint: 'bg-mint',
  lavender: 'bg-lavender',
} as const

type ServiceBlockProps = {
  section: ServiceSectionData
  /** Put the photo on the left instead of the right. */
  imageLeft?: boolean
}

/** Text + full-height photo. Photo is flush with the top and bottom of the band. */
export function ServiceBlock({ section, imageLeft = false }: ServiceBlockProps) {
  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className={cn('scroll-mt-20', tones[section.tone])}>
      <Container className="grid lg:grid-cols-2">
        <Reveal
          direction={imageLeft ? 'left' : 'right'}
          className={cn(
            'flex flex-col justify-center gap-5 py-14 lg:py-24',
            imageLeft ? 'lg:order-2 lg:pl-20' : 'lg:pr-20',
          )}
        >
          <p className="text-base font-medium text-ink">{section.title}</p>
          <Heading as="h2" id={`${section.id}-title`} size="md" className="max-w-lg">
            {section.heading}
          </Heading>
          <p className="max-w-lg text-xs leading-relaxed text-muted sm:text-sm">{section.text}</p>
        </Reveal>

        <ImageReveal
          src={section.image}
          alt={section.imageAlt}
          from={imageLeft ? 'left' : 'right'}
          className={cn('aspect-[4/3] lg:aspect-auto', imageLeft && 'lg:order-1')}
        />
      </Container>
    </section>
  )
}
