import { Avatar, Skeleton } from '@/shared/ui'

import type { Testimonial } from '../model/schema'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, author } = testimonial

  return (
    <figure className="flex flex-col gap-8">
      <blockquote className="max-w-xl text-xl leading-relaxed font-medium text-ink">{quote}</blockquote>
      <figcaption className="flex items-center gap-4">
        <Avatar name={author.name} src={author.avatar} size="md" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-ink">{author.name}</span>
          <span className="text-xs text-muted">{author.role}</span>
        </div>
      </figcaption>
    </figure>
  )
}

export function TestimonialSkeleton() {
  return <Skeleton className="h-64 w-full bg-white" />
}
