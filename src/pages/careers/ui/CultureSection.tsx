import { Card, Eyebrow, Heading, List, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

import { PERK_TEXT, PERKS } from '../model/perks'

export function CultureSection() {
  return (
    <Section tone="surface" aria-labelledby="culture-title">
      <Reveal className="flex max-w-xl flex-col gap-5">
        <Eyebrow>Our work &amp; culture</Eyebrow>
        <Heading id="culture-title" size="lg">
          Come and join a team of highly skilled professionals.
        </Heading>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Through True Rich Attended does no end it his mother since real had half every him case in packages
          enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
        </p>
      </Reveal>

      <Stagger className="mt-14">
        <List
          items={PERKS}
          getKey={(perk) => perk.title}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
          renderItem={(perk) => (
            <StaggerItem className="h-full">
              <Card
                variant="flat"
                className="group flex h-full flex-col gap-4 p-8 transition-shadow duration-500 hover:shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-full bg-peach-soft text-lg transition-transform duration-300 group-hover:scale-110"
                >
                  {perk.emoji}
                </span>
                <h3 className="text-base font-semibold text-ink">{perk.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{PERK_TEXT}</p>
              </Card>
            </StaggerItem>
          )}
        />
      </Stagger>
    </Section>
  )
}
