import { AccentBar, Card, Eyebrow, Heading, IconBadge, List, PixelSquare, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

import { EXPERTISE_FEATURES } from '../model/features'

export function Expertise() {
  return (
    <Section tone="mint" aria-labelledby="expertise-title" containerClassName="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
      <Reveal className="flex max-w-xl flex-col gap-6">
        <Eyebrow>Our Expertise</Eyebrow>
        <Heading id="expertise-title" size="lg">
          We want to get local identification in every corner of the world in this era of global citizenship
        </Heading>
        <p className="text-sm leading-relaxed text-muted">
          Through True Rich Attended does no end it his mother since real had half every him case in packages
          enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
        </p>
      </Reveal>

      <Stagger className="relative">
        <PixelSquare tone="brand" className="mb-4 size-3" />
        <List
          items={EXPERTISE_FEATURES}
          getKey={(feature) => feature.title}
          className="flex flex-col gap-4"
          renderItem={(feature) => (
            <StaggerItem>
              <Card className="group flex items-start gap-5 p-6 transition-transform duration-500 hover:-translate-x-2">
                <IconBadge icon={feature.icon} className="transition-colors group-hover:bg-orange group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <Heading as="h3" size="sm" className="text-base md:text-base">
                    {feature.title}
                  </Heading>
                  <p className="max-w-xs text-xs leading-relaxed text-muted">{feature.text}</p>
                </div>
              </Card>
            </StaggerItem>
          )}
        />
        <AccentBar reverse className="h-1 w-full" />
      </Stagger>
    </Section>
  )
}
