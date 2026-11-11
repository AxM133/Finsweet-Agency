import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { jobQueries } from '@/entities/job'
import { HttpError } from '@/shared/api'
import { QueryState, Section, Skeleton } from '@/shared/ui'
import { Newsletter } from '@/widgets/newsletter'
import { NotFoundBlock } from '@/widgets/not-found'

import { ApplySection } from './ApplySection'
import { JobHero } from './JobHero'
import { JobTabs } from './JobTabs'

function JobSkeleton() {
  return (
    <Section containerClassName="flex flex-col gap-6">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-16 w-full max-w-md" />
      <Skeleton className="h-72 w-full" />
    </Section>
  )
}

export function CareerDetailsPage() {
  const { slug = '' } = useParams()
  const query = useQuery(jobQueries.bySlug(slug))

  if (query.error instanceof HttpError && query.error.status === 404) {
    return <NotFoundBlock title="Vacancy not found" text="This position is closed or does not exist." />
  }

  return (
    <>
      <QueryState query={query} skeleton={<JobSkeleton />}>
        {(job) => (
          <>
            <JobHero job={job} />
            <JobTabs job={job} />
            <ApplySection job={job} />
          </>
        )}
      </QueryState>
      <Newsletter />
    </>
  )
}
