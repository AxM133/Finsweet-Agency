import { Link } from 'react-router'

import { images } from '@/shared/assets'
import { ROUTES } from '@/shared/config'
import { AccentBar, Button, Eyebrow, Heading, List, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'
import { Stats } from '@/widgets/stats'

const PHOTOS = [
  { src: images.office1, alt: 'Team meeting at a long wooden table' },
  { src: images.office2, alt: 'Colleagues gathered in a bright meeting room' },
  { src: images.office3, alt: 'Manager leading a meeting with her team', accent: true },
] as const

export function AboutSection() {
  return (
    <Section aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>About Us</Eyebrow>
          <Heading id="about-title" size="lg">
            The company leads entire webdesign process from concept to delivery.
          </Heading>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-col gap-4 lg:pt-10">
          <Heading as="h3" size="md">
            The Era Of Technology.
          </Heading>
          <p className="text-sm leading-relaxed text-muted">
            Through True Rich Attended does no end it his mother since real had half every him case in packages
            enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
          </p>
        </Reveal>
      </div>

      <Stagger className="mt-14">
        <List
          items={PHOTOS}
          getKey={(photo) => photo.src}
          className="grid gap-4 sm:grid-cols-3"
          renderItem={(photo) => (
            <StaggerItem className="group relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[0.95] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {'accent' in photo && (
                <AccentBar reverse orientation="vertical" className="absolute inset-y-0 right-0 w-3" />
              )}
            </StaggerItem>
          )}
        />
      </Stagger>

      <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <Stats className="flex-1 sm:max-w-xl" />
        <Button as={Link} to={ROUTES.company} variant="link" withArrow>
          Read about us
        </Button>
      </div>
    </Section>
  )
}
