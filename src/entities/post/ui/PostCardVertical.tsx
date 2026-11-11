import { Link } from 'react-router'

import { Card, Heading, Skeleton } from '@/shared/ui'

import { getPostPath } from '../lib/post-path'
import type { Post } from '../model/schema'
import { PostMeta } from './PostMeta'

/** White vertical card: photo on top, then title, excerpt and author. */
export function PostCardVertical({ post }: { post: Post }) {
  const href = getPostPath(post.slug)

  return (
    <Card
      as="article"
      variant="flat"
      className="group relative flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-card"
    >
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="aspect-[405/266] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-7">
        <Heading as="h3" size="sm">
          <Link to={href} className="transition-colors after:absolute after:inset-0 group-hover:text-primary">
            {post.title}
          </Link>
        </Heading>
        <p className="flex-1 text-xs leading-relaxed text-muted">{post.excerpt}</p>
        <PostMeta post={post} />
      </div>
    </Card>
  )
}

export function PostCardVerticalSkeleton() {
  return <Skeleton className="h-96 w-full bg-white" />
}
