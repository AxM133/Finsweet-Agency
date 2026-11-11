import { infiniteQueryOptions, keepPreviousData, queryOptions } from '@tanstack/react-query'

import { HttpError, mockRequest } from '@/shared/api'

import {
  postDetailSchema,
  postListSchema,
  postNeighborsSchema,
  postPageSchema,
  postSchema,
} from '../model/schema'
import type { Post } from '../model/schema'
import { ALL_POSTS, POPULAR_POSTS, RECENT_COUNT, REGULAR_POSTS, toDetail, TRENDING_POST } from './mock-posts'

const PAGE_SIZE = 6

const matches = (post: Post, term: string) =>
  `${post.title} ${post.excerpt} ${post.author.name}`.toLowerCase().includes(term)

/** Posts for the "All posts" block. A search looks through every regular post, browsing shows the archive. */
function getArchivePage(search: string, page: number) {
  const term = search.trim().toLowerCase()
  const source = term ? REGULAR_POSTS.filter((post) => matches(post, term)) : REGULAR_POSTS.slice(RECENT_COUNT)
  const start = (page - 1) * PAGE_SIZE

  return {
    items: source.slice(start, start + PAGE_SIZE),
    total: source.length,
    nextPage: start + PAGE_SIZE < source.length ? page + 1 : null,
  }
}

export const postQueries = {
  trending: () =>
    queryOptions({
      queryKey: ['posts', 'trending'],
      queryFn: () => mockRequest(postSchema, TRENDING_POST),
    }),

  popular: () =>
    queryOptions({
      queryKey: ['posts', 'popular'],
      queryFn: () => mockRequest(postListSchema, POPULAR_POSTS),
    }),

  /** Newest posts (Home, "Read Recent Post"). */
  recent: (limit: number = RECENT_COUNT) =>
    queryOptions({
      queryKey: ['posts', 'recent', limit],
      queryFn: () => mockRequest(postListSchema, REGULAR_POSTS.slice(0, limit)),
    }),

  /** Paginated "All posts" with optional search. */
  archive: (search: string) =>
    infiniteQueryOptions({
      queryKey: ['posts', 'archive', search],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => mockRequest(postPageSchema, getArchivePage(search, pageParam), 600),
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
      placeholderData: keepPreviousData,
    }),

  bySlug: (slug: string) =>
    queryOptions({
      queryKey: ['posts', 'detail', slug],
      queryFn: () => {
        const found = ALL_POSTS.find((post) => post.slug === slug)
        if (!found) throw new HttpError(404, 'Post not found')
        return mockRequest(postDetailSchema, toDetail(found))
      },
    }),

  /** Previous / next post in the blog order. */
  neighbors: (slug: string) =>
    queryOptions({
      queryKey: ['posts', 'neighbors', slug],
      queryFn: () => {
        const index = ALL_POSTS.findIndex((post) => post.slug === slug)
        return mockRequest(postNeighborsSchema, {
          previous: ALL_POSTS[index - 1] ?? null,
          next: ALL_POSTS[index + 1] ?? null,
        })
      },
    }),

  /** Posts of one author (team member page). */
  byAuthor: (authorName: string) =>
    queryOptions({
      queryKey: ['posts', 'author', authorName],
      queryFn: () =>
        mockRequest(
          postListSchema,
          ALL_POSTS.filter((post) => post.author.name === authorName),
        ),
    }),
}

