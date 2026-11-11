import { useQuery } from '@tanstack/react-query'

import { PostCardCompact, PostCardCompactSkeleton, postQueries } from '@/entities/post'
import { Heading, List, QueryState, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

const SKELETONS = ['a', 'b', 'c', 'd']

export function RecentSection() {
  const query = useQuery(postQueries.recent())

  return (
    <Section aria-labelledby="recent-title" className="pt-0 lg:pt-0">
      <Reveal>
        <Heading id="recent-title" size="lg">
          Read Recent Post
        </Heading>
      </Reveal>

      <div className="mt-12">
        <QueryState
          query={query}
          skeleton={
            <div className="grid gap-8 md:grid-cols-2">
              {SKELETONS.map((key) => (
                <PostCardCompactSkeleton key={key} />
              ))}
            </div>
          }
        >
          {(posts) => (
            <Stagger interval={0.1}>
              <List
                items={posts}
                getKey={(post) => post.id}
                className="grid gap-8 md:grid-cols-2"
                itemClassName="h-full"
                renderItem={(post) => (
                  <StaggerItem className="h-full">
                    <PostCardCompact post={post} />
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
