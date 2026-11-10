import { useQuery } from '@tanstack/react-query'

import { postQueries, PostCard, PostCardSkeleton } from '@/entities/post'
import { Heading, List, PixelSquare, QueryState, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

export function LatestPostsSection() {
  const query = useQuery(postQueries.latest(2))

  return (
    <Section tone="mint" aria-labelledby="latest-posts-title">
      <Reveal className="flex flex-col items-start gap-5">
        <PixelSquare tone="brand" className="size-3" />
        <Heading id="latest-posts-title" size="lg">
          Read our latest blogs &amp; news
        </Heading>
      </Reveal>

      <div className="mt-12">
        <QueryState
          query={query}
          skeleton={
            <div className="grid gap-8 md:grid-cols-2">
              <PostCardSkeleton />
              <PostCardSkeleton />
            </div>
          }
        >
          {(posts) => (
            <Stagger>
              <List
                items={posts}
                getKey={(post) => post.id}
                className="grid gap-8 md:grid-cols-2"
                itemClassName="h-full"
                renderItem={(post) => (
                  <StaggerItem className="h-full">
                    <PostCard post={post} />
                  </StaggerItem>
                )}
              />
            </Stagger>
          )}
        </QueryState>
      </div>
    </Section>
  )
}
