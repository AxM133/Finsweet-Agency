import { useInfiniteQuery } from '@tanstack/react-query'

import { PostCardVertical, PostCardVerticalSkeleton, postQueries } from '@/entities/post'
import { Button, Heading, Input, List, QueryState, Reveal, Section, Spinner } from '@/shared/ui'

import { useArchiveSearch } from './use-archive-search'

const SKELETONS = ['a', 'b', 'c', 'd', 'e', 'f']
const GRID = 'grid gap-8 sm:grid-cols-2 lg:grid-cols-3'

export function ArchiveSection() {
  const { value, setValue, search } = useArchiveSearch()
  const query = useInfiniteQuery(postQueries.archive(search))

  return (
    <Section tone="surface" aria-labelledby="archive-title">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <Heading id="archive-title" size="lg">
            All posts
          </Heading>
        </Reveal>
        <div className="w-full sm:max-w-xs">
          <Input
            type="search"
            name="q"
            variant="white"
            label="Search posts"
            placeholder="Search posts"
            autoComplete="off"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="h-14 shadow-card"
          />
        </div>
      </div>

      <div className="mt-12" aria-live="polite">
        <QueryState
          query={query}
          skeleton={
            <div className={GRID}>
              {SKELETONS.map((key) => (
                <PostCardVerticalSkeleton key={key} />
              ))}
            </div>
          }
        >
          {(data) => {
            const posts = data.pages.flatMap((page) => page.items)
            const total = data.pages[0]?.total ?? 0

            if (posts.length === 0) {
              return (
                <div className="flex flex-col items-start gap-5 bg-white p-10">
                  <p className="text-ink">
                    No posts found for <span className="font-medium">“{search}”</span>. Try a different keyword.
                  </p>
                  <Button onClick={() => setValue('')}>Clear search</Button>
                </div>
              )
            }

            return (
              <div className="flex flex-col items-center gap-12">
                <List
                  items={posts}
                  getKey={(post) => post.id}
                  className={`${GRID} w-full`}
                  itemClassName="h-full"
                  renderItem={(post, index) => (
                    <Reveal className="h-full" delay={(index % 3) * 0.1}>
                      <PostCardVertical post={post} />
                    </Reveal>
                  )}
                />

                <div className="flex flex-col items-center gap-4">
                  <p className="text-xs text-muted">
                    Showing {posts.length} of {total}
                  </p>
                  {query.hasNextPage && (
                    <Button onClick={() => query.fetchNextPage()} disabled={query.isFetchingNextPage}>
                      {query.isFetchingNextPage ? <Spinner className="size-5" /> : 'Load more'}
                    </Button>
                  )}
                </div>
              </div>
            )
          }}
        </QueryState>
      </div>
    </Section>
  )
}
