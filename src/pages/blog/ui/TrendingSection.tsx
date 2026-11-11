import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import { getPostPath, PostMeta, postQueries } from '@/entities/post'
import type { Post } from '@/entities/post'
import {
  Button,
  Eyebrow,
  Heading,
  ImageReveal,
  List,
  PixelMark,
  PixelSquare,
  QueryState,
  Reveal,
  Section,
  Skeleton,
  Stagger,
  StaggerItem,
} from '@/shared/ui'

function TrendingPost({ post }: { post: Post }) {
  return (
    <div className="flex flex-col gap-10">
      <Reveal className="flex flex-col items-start gap-5">
        <PixelSquare />
        <Eyebrow>Trending</Eyebrow>
        <Heading as="h1" id="blog-title" size="xl" className="max-w-xl">
          <Link to={getPostPath(post.slug)} className="transition-colors hover:text-primary">
            {post.title}
          </Link>
        </Heading>
        <p className="max-w-lg text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <Button as={Link} to={getPostPath(post.slug)} variant="link" withArrow>
          Read More
        </Button>
        <PostMeta post={post} layout="inline" />
      </Reveal>

      <div className="relative">
        <ImageReveal src={post.image} alt={post.title} from="bottom" className="aspect-[612/390]" />
        <span aria-hidden="true" className="absolute top-0 right-0 h-8 w-3 bg-primary" />
        <span aria-hidden="true" className="absolute right-0 bottom-0 h-14 w-3 bg-orange" />
      </div>
    </div>
  )
}

function PopularPosts({ posts }: { posts: Post[] }) {
  return (
    <Reveal direction="left" className="relative bg-peach-soft p-8 sm:p-12">
      <PixelMark className="absolute top-0 right-0 size-6" />
      <Stagger interval={0.15}>
        <List
          items={posts}
          getKey={(post) => post.id}
          className="flex flex-col gap-10"
          renderItem={(post) => (
            <StaggerItem className="group flex flex-col gap-4">
              <Heading as="h2" size="sm" className="md:text-[1.375rem]">
                <Link to={getPostPath(post.slug)} className="transition-colors group-hover:text-primary">
                  {post.title}
                </Link>
              </Heading>
              <PostMeta post={post} />
            </StaggerItem>
          )}
        />
      </Stagger>
    </Reveal>
  )
}

export function TrendingSection() {
  const trending = useQuery(postQueries.trending())
  const popular = useQuery(postQueries.popular())

  return (
    <Section aria-labelledby="blog-title" containerClassName="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <QueryState query={trending} skeleton={<Skeleton className="h-[40rem] w-full" />}>
        {(post) => <TrendingPost post={post} />}
      </QueryState>
      <QueryState query={popular} skeleton={<Skeleton className="h-96 w-full bg-peach-soft" />}>
        {(posts) => <PopularPosts posts={posts} />}
      </QueryState>
    </Section>
  )
}
