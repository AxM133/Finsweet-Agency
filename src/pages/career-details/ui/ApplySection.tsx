import { ApplyForm } from '@/features/apply-to-job'
import type { JobDetail } from '@/entities/job'
import { Heading, Reveal, Section } from '@/shared/ui'

export function ApplySection({ job }: { job: JobDetail }) {
  return (
    <Section id="apply" aria-labelledby="apply-title">
      <Reveal className="flex flex-col gap-10">
        <Heading id="apply-title" size="lg" className="md:text-3xl">
          Apply Now
        </Heading>
        <ApplyForm jobSlug={job.slug} jobTitle={job.title} />
      </Reveal>
    </Section>
  )
}
