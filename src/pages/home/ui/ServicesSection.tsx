import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import { serviceQueries, ServiceCard, ServiceCardSkeleton } from '@/entities/service'
import { ROUTES } from '@/shared/config'
import { Button, Eyebrow, Heading, List, QueryState, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

const SKELETONS = ['a', 'b', 'c']

export function ServicesSection() {
  const query = useQuery(serviceQueries.all())

  return (
    <Section tone="peach" aria-labelledby="services-title">
      <Reveal className="flex max-w-2xl flex-col items-start gap-6">
        <Eyebrow>Our Services</Eyebrow>
        <Heading id="services-title" size="lg">
          We build software solutions that solve client’s business challenges
        </Heading>
        <Button as={Link} to={ROUTES.contact} withArrow>
          Start a Project
        </Button>
      </Reveal>

      <div className="mt-16">
        <QueryState
          query={query}
          skeleton={
            <div className="grid gap-8 md:grid-cols-3">
              {SKELETONS.map((key) => (
                <ServiceCardSkeleton key={key} />
              ))}
            </div>
          }
        >
          {(services) => (
            <Stagger>
              <List
                items={services}
                getKey={(service) => service.id}
                className="grid gap-8 md:grid-cols-3"
                itemClassName="h-full"
                renderItem={(service) => (
                  <StaggerItem className="h-full">
                    <ServiceCard service={service} />
                  </StaggerItem>
                )}
              />
            </Stagger>
          )}
        </QueryState>
      </div>
    </Section>
  )
}
