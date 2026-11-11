import { useQuery } from '@tanstack/react-query'

import { PostCard, PostCardSkeleton, postQueries } from '@/entities/post'
import { Heading, List, PixelSquare, Reveal, Section, Stagger, StaggerItem } from '@/shared/ui'

/** Blog posts written by one team member. Renders nothing when there are none. */
export function MemberPosts({ authorName }: { authorName: string }) {
  const { data: posts, isPending } = useQuery(postQueries.byAuthor(authorName))
  const firstName = authorName.split(' ')[0]

  if (!isPending && posts?.length === 0) return null

  return (
    <Section tone="mint" aria-labelledby="member-posts-title">
      <Reveal className="flex flex-col items-start gap-5">
        <PixelSquare tone="brand" className="size-3" />
        <Heading id="member-posts-title" size="lg">
          Blog posts from {firstName}
        </Heading>
      </Reveal>

      <div className="mt-12">
        {posts ? (
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
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            <PostCardSkeleton />
            <PostCardSkeleton />
          </div>
        )}
      </div>
    </Section>
  )
}
