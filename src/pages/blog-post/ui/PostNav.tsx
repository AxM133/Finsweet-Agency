import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import { getPostPath, postQueries } from '@/entities/post'
import type { Post } from '@/entities/post'
import { cn } from '@/shared/lib'
import { ArrowRightIcon, Container } from '@/shared/ui'

function NavLink({ post, direction }: { post: Post; direction: 'previous' | 'next' }) {
  const isNext = direction === 'next'

  return (
    <Link
      to={getPostPath(post.slug)}
      className={cn('group flex flex-col gap-3 bg-lavender p-8 transition-colors hover:bg-mint', isNext && 'sm:items-end sm:text-right')}
    >
      <span className="flex items-center gap-2 text-xs text-muted">
        {!isNext && <ArrowRightIcon className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />}
        {isNext ? 'Next post' : 'Previous post'}
        {isNext && <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />}
      </span>
      <span className="text-lg leading-snug font-semibold text-ink">{post.title}</span>
    </Link>
  )
}

export function PostNav({ slug }: { slug: string }) {
  const { data } = useQuery(postQueries.neighbors(slug))

  if (!data || (!data.previous && !data.next)) return null

  return (
    <Container className="grid gap-4 pb-20 sm:grid-cols-2 lg:pb-28" aria-label="More posts">
      <div>{data.previous && <NavLink post={data.previous} direction="previous" />}</div>
      <div>{data.next && <NavLink post={data.next} direction="next" />}</div>
    </Container>
  )
}
