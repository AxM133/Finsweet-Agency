import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { teamMemberQueries } from '@/entities/team-member'
import { HttpError } from '@/shared/api'
import { QueryState, Section, Skeleton } from '@/shared/ui'
import { NotFoundBlock } from '@/widgets/not-found'

import { MemberPosts } from './MemberPosts'
import { MemberProfile } from './MemberProfile'

function ProfileSkeleton() {
  return (
    <Section containerClassName="flex flex-col items-center gap-8">
      <Skeleton className="size-64 rounded-full sm:size-80" />
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-20 w-full max-w-md" />
    </Section>
  )
}

export function TeamMemberPage() {
  const { slug = '' } = useParams()
  const query = useQuery(teamMemberQueries.bySlug(slug))

  if (query.error instanceof HttpError && query.error.status === 404) {
    return <NotFoundBlock title="Team member not found" text="We could not find the person you are looking for." />
  }

  return (
    <QueryState query={query} skeleton={<ProfileSkeleton />}>
      {(member) => (
        <>
          <MemberProfile member={member} />
          <MemberPosts authorName={member.name} />
        </>
      )}
    </QueryState>
  )
}
