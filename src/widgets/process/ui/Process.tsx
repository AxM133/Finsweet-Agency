import { AccentBar, Card, Eyebrow, Heading, IconBadge, List, PixelMark, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

import { PROCESS_STEPS } from '../model/steps'

type ProcessProps = {
  tone?: 'white' | 'lavender'
}

export function Process({ tone = 'white' }: ProcessProps) {
  return (
    <Section id="process" tone={tone} aria-labelledby="process-title">
      <div className="flex items-start justify-between gap-8">
        <Reveal className="flex max-w-xl flex-col gap-6">
          <Eyebrow>Our Process</Eyebrow>
          <Heading id="process-title" size="lg">
            The process we are working With Our client Worldwide
          </Heading>
          <p className="text-sm leading-relaxed text-muted">
            Through True Rich Attended does no end it his mother since real had half every him case in packages
            enquire we up ecstatic unsatiable saw.
          </p>
        </Reveal>
        <PixelMark className="hidden size-6 shrink-0 lg:grid" />
      </div>

      <Stagger className="mt-16">
        <List
          items={PROCESS_STEPS}
          getKey={(step) => step.title}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
          renderItem={(step, index) => (
            <StaggerItem className="h-full">
              <Card
                variant="outline"
                className="group relative flex h-full flex-col gap-4 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
              >
                {index === 0 && <AccentBar reverse className="absolute inset-x-0 bottom-0 h-1" />}
                {index === PROCESS_STEPS.length - 1 && <AccentBar reverse className="absolute inset-x-0 top-0 h-1" />}

                <span className="absolute top-5 right-6 text-sm text-line transition-colors group-hover:text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <IconBadge icon={step.icon} className="size-9 bg-transparent transition-colors group-hover:bg-peach-soft" />
                <Heading as="h3" size="sm" className="text-base md:text-base">
                  {step.title}
                </Heading>
                <p className="text-xs leading-relaxed text-muted">{step.text}</p>
              </Card>
            </StaggerItem>
          )}
        />
      </Stagger>
    </Section>
  )
}
