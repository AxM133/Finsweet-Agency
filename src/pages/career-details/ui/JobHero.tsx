import type { JobDetail } from '@/entities/job'
import { Button, Eyebrow, Heading, PixelMark, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

export function JobHero({ job }: { job: JobDetail }) {
  return (
    <Section
      aria-labelledby="job-title"
      containerClassName="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
      className="pb-12 lg:pb-16"
    >
      <Stagger interval={0.12} className="flex flex-col items-start gap-6 lg:pl-16">
        <StaggerItem>
          <Eyebrow>Career at Finsweet</Eyebrow>
        </StaggerItem>
        <StaggerItem>
          <Heading as="h1" id="job-title" size="lg">
            {job.title}
          </Heading>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{job.intro}</p>
        </StaggerItem>
        <StaggerItem>
          <Button as="a" href="#apply" withArrow>
            Apply Now
          </Button>
        </StaggerItem>
      </Stagger>

      <Reveal direction="left" className="relative bg-peach-soft p-10 sm:p-14">
        <PixelMark className="absolute top-0 right-0 size-6" />
        <h2 className="text-xl font-semibold text-ink">Job Description</h2>
        <ul className="mt-8 flex flex-col gap-5 text-sm text-ink">
          <li>{job.summary}</li>
          <li>Department: {job.department}</li>
          <li>
            {job.type} {job.positions} Position Available.
          </li>
        </ul>
      </Reveal>
    </Section>
  )
}
