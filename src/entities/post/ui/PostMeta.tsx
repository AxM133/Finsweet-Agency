import { cn, formatDate, formatLongDate } from '@/shared/lib'
import { Avatar } from '@/shared/ui'

import type { Post } from '../model/schema'

type PostMetaProps = {
  post: Post
  /** `stacked`: name over date. `inline`: name | Posted on <long date>. */
  layout?: 'stacked' | 'inline'
  className?: string
}

export function PostMeta({ post, layout = 'stacked', className }: PostMetaProps) {
  const { author, date } = post

  if (layout === 'inline') {
    return (
      <div className={cn('flex items-center gap-3 text-xs', className)}>
        <Avatar name={author.name} src={author.avatar} size="sm" />
        <span className="text-ink">{author.name}</span>
        <span aria-hidden="true" className="h-4 w-px bg-line" />
        <time dateTime={date} className="text-muted">
          Posted on {formatLongDate(date)}
        </time>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Avatar name={author.name} src={author.avatar} size="sm" />
      <div className="flex flex-col text-xs">
        <span className="text-ink">{author.name}</span>
        <time dateTime={date} className="text-muted">
          {formatDate(date)}
        </time>
      </div>
    </div>
  )
}
