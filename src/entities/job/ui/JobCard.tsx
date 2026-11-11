import { generatePath, Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { ArrowRightIcon, Card, Heading, Skeleton } from '@/shared/ui'

import type { Job } from '../model/schema'

export function JobCard({ job }: { job: Job }) {
  return (
    <Card
      as="article"
      className="group relative flex h-full flex-col gap-3 p-8 shadow-none transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
    >
      <Heading as="h3" size="sm" className="text-base md:text-base">
        {job.title}
      </Heading>
      <p className="text-sm text-muted">
        {job.location} · {job.type}
      </p>
      <p className="text-sm text-muted">
        {job.salary} · {job.note}
      </p>
      <Link
        to={generatePath(ROUTES.careerDetails, { slug: job.slug })}
        className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-primary after:absolute after:inset-0"
      >
        Apply Now
        <ArrowRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Card>
  )
}

export function JobCardSkeleton() {
  return <Skeleton className="h-44 w-full bg-white" />
}
