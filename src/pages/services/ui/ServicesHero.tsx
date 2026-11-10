import { Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { ArrowRightIcon, Button, Eyebrow, Heading, List, Section, Stagger, StaggerItem } from '@/shared/ui'

import { SERVICE_SECTIONS } from '../model/service-sections'

export function ServicesHero() {
  return (
    <Section
      tone="peach"
      aria-labelledby="services-hero-title"
      containerClassName="grid items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20"
    >
      <Stagger interval={0.12} className="flex flex-col items-start gap-6">
        <StaggerItem>
          <Eyebrow>Our Services</Eyebrow>
        </StaggerItem>
        <StaggerItem>
          <Heading as="h1" id="services-hero-title" size="xl" className="max-w-xl">
            We Build Software Solutions that Solve Clients’ Business Challenges
          </Heading>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Through True Rich Attended does no end it his mother since favourable real had half every him case in
            packages enquire we up ecstatic.
          </p>
        </StaggerItem>
        <StaggerItem>
          <Button as={Link} to={ROUTES.contact} withArrow>
            Request A Quote
          </Button>
        </StaggerItem>
      </Stagger>

      <Stagger interval={0.1} delay={0.3} aria-label="Jump to a service">
        <List
          items={SERVICE_SECTIONS}
          getKey={(section) => section.id}
          className="flex flex-col gap-5"
          renderItem={(section) => (
            <StaggerItem>
              <a
                href={`#${section.id}`}
                className="group inline-flex items-center gap-3 text-lg font-medium text-ink transition-colors hover:text-primary focus-visible:text-primary"
              >
                {section.title}
                <ArrowRightIcon className="size-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
              </a>
            </StaggerItem>
          )}
        />
      </Stagger>
    </Section>
  )
}
