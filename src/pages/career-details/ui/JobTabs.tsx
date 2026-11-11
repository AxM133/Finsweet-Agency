import type { JobDetail } from '@/entities/job'
import { Reveal, RichContent, Section, Tabs } from '@/shared/ui'

const bullets = (items: string[]) => <RichContent blocks={[{ type: 'list', style: 'bullets', items }]} />

export function JobTabs({ job }: { job: JobDetail }) {
  const items = [
    { value: 'details', label: 'Details', content: bullets(job.details) },
    { value: 'requirements', label: 'Requirements', content: bullets(job.requirements) },
    { value: 'responsibilities', label: 'Responsibilities', content: bullets(job.responsibilities) },
  ] as const

  return (
    <Section aria-label="Job information" className="py-0 lg:py-0">
      <Reveal>
        <Tabs
          items={items}
          className="bg-mint pt-10"
          listClassName="mx-6"
          panelClassName="mx-auto max-w-3xl px-6 py-12 outline-none lg:py-16 [&_li]:text-ink"
        />
      </Reveal>
    </Section>
  )
}
