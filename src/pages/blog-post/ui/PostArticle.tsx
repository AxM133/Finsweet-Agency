import { useRef } from 'react'

import { getReadingMinutes, PostMeta } from '@/entities/post'
import type { PostDetail } from '@/entities/post'
import { SharePost } from '@/features/share-post'
import { AccentBar, Heading, ImageReveal, PixelMark, PixelSquare, Reveal, RichContent, Section } from '@/shared/ui'

import { ReadingProgress } from './ReadingProgress'

export function PostArticle({ post }: { post: PostDetail }) {
  const articleRef = useRef<HTMLElement>(null)

  return (
    <>
      <ReadingProgress targetRef={articleRef} />

      <Section aria-labelledby="post-title" className="pb-0 lg:pb-0">
        <div className="flex items-start justify-between gap-8">
          <Reveal className="flex max-w-3xl flex-col items-start gap-6">
            <PixelSquare />
            <Heading as="h1" id="post-title" size="xl">
              {post.title}
            </Heading>
            <p className="max-w-xl text-sm leading-relaxed text-muted">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <PostMeta post={post} layout="inline" />
              <span className="text-xs text-muted">{getReadingMinutes(post.content)} min read</span>
            </div>
          </Reveal>
          <PixelMark className="hidden size-6 shrink-0 lg:grid" />
        </div>

        <div className="relative mt-14">
          <ImageReveal src={post.cover} alt={post.title} from="bottom" className="aspect-[16/9] sm:aspect-[1280/370]" />
          <AccentBar reverse className="absolute top-full right-0 h-2.5 w-1/3 max-w-xs" />
        </div>
      </Section>

      <Section className="pb-12 lg:pb-16" containerClassName="max-w-3xl">
        <article ref={articleRef}>
          <RichContent blocks={post.content} />
        </article>
        <SharePost title={post.title} className="mt-12 border-t border-line/60 pt-6" />
      </Section>
    </>
  )
}
