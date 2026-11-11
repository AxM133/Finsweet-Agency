import { Link } from 'react-router'

import { Card, Heading, Skeleton } from '@/shared/ui'

import { getPostPath } from '../lib/post-path'
import type { Post } from '../model/schema'
import { PostMeta } from './PostMeta'

/** Lavender horizontal card: photo, title and author. */
export function PostCardCompact({ post }: { post: Post }) {
  const href = getPostPath(post.slug)

  return (
    <Card
      as="article"
      variant="flat"
      className="group relative flex h-full flex-col overflow-hidden bg-lavender sm:flex-row"
    >
      <div className="overflow-hidden sm:w-[45%] sm:shrink-0">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-6 p-6 sm:p-8">
        <Heading as="h3" size="sm" className="md:text-2xl">
          <Link to={href} className="transition-colors after:absolute after:inset-0 group-hover:text-primary">
            {post.title}
          </Link>
        </Heading>
        <PostMeta post={post} />
      </div>
    </Card>
  )
}

export function PostCardCompactSkeleton() {
  return <Skeleton className="h-56 w-full" />
}
