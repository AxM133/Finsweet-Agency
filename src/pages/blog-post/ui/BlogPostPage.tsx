import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { postQueries } from '@/entities/post'
import { HttpError } from '@/shared/api'
import { QueryState, Section, Skeleton } from '@/shared/ui'
import { Newsletter } from '@/widgets/newsletter'
import { NotFoundBlock } from '@/widgets/not-found'

import { PostArticle } from './PostArticle'
import { PostNav } from './PostNav'

function PostSkeleton() {
  return (
    <Section containerClassName="flex flex-col gap-6">
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-32 w-full max-w-3xl" />
      <Skeleton className="h-72 w-full" />
    </Section>
  )
}

export function BlogPostPage() {
  const { slug = '' } = useParams()
  const query = useQuery(postQueries.bySlug(slug))

  if (query.error instanceof HttpError && query.error.status === 404) {
    return <NotFoundBlock title="Post not found" text="This article does not exist or has been removed." />
  }

  return (
    <>
      <QueryState query={query} skeleton={<PostSkeleton />}>
        {(post) => <PostArticle post={post} />}
      </QueryState>
      <PostNav slug={slug} />
      <Newsletter />
    </>
  )
}
