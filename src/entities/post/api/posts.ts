import { queryOptions } from '@tanstack/react-query'

import { mockRequest } from '@/shared/api'
import { images } from '@/shared/assets'

import { postListSchema } from '../model/schema'
import type { Post } from '../model/schema'

const POSTS: Post[] = [
  {
    id: '1',
    slug: 'todays-best-design-trends-for-digital-products',
    title: 'Today’s best design trends for digital products',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
    date: '2021-01-19',
    image: images.blog1,
    author: { name: 'Andrew Jonson' },
  },
  {
    id: '2',
    slug: 'a-practical-guide-to-building-a-brand-strategy',
    title: 'A practical guide to building a brand strategy',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content of a page.',
    date: '2021-01-19',
    image: images.blog2,
    author: { name: 'Andrew Jonson' },
  },
]

export const postQueries = {
  all: () =>
    queryOptions({
      queryKey: ['posts'],
      queryFn: () => mockRequest(postListSchema, POSTS),
    }),
  latest: (limit: number) =>
    queryOptions({
      queryKey: ['posts', 'latest', limit],
      queryFn: () => mockRequest(postListSchema, POSTS.slice(0, limit)),
    }),
}
