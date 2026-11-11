import { Link } from 'react-router'

import { formatDate } from '@/shared/lib'
import { Button, Card, Heading, Skeleton } from '@/shared/ui'

import { getPostPath } from '../lib/post-path'
import type { Post } from '../model/schema'

/** Horizontal card: photo on the left, text on the right. */
export function PostCard({ post }: { post: Post }) {
  const href = getPostPath(post.slug)

  return (
    <Card as="article" variant="flat" className="group flex h-full flex-col overflow-hidden sm:flex-row">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden sm:w-2/5 sm:shrink-0">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
        />
      </Link>
      <div className="flex flex-col justify-center gap-4 p-8">
        <time dateTime={post.date} className="text-sm text-muted">
          {formatDate(post.date)}
        </time>
        <Heading as="h3" size="md">
          <Link to={href} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </Heading>
        <Button as={Link} to={href} variant="link" withArrow className="self-start">
          Read More
        </Button>
      </div>
    </Card>
  )
}

export function PostCardSkeleton() {
  return <Skeleton className="h-72 w-full" />
}
