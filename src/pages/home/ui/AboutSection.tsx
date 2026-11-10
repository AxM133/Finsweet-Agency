import { Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { Button, Eyebrow, Heading, Reveal, Section } from '@/shared/ui'
import { OfficeGallery } from '@/widgets/office-gallery'
import { Stats } from '@/widgets/stats'

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

      <OfficeGallery className="mt-14" />

      <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <Stats className="flex-1 sm:max-w-xl" />
        <Button as={Link} to={ROUTES.company} variant="link" withArrow>
          Read about us
        </Button>
      </div>
    </Section>
  )
}
