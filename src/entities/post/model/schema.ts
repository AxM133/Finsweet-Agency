import { z } from 'zod'

import { contentBlockSchema } from '@/shared/lib'

export const postSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  date: z.iso.date(),
  image: z.string(),
  author: z.object({
    name: z.string(),
    avatar: z.string().optional(),
  }),
})

export const postDetailSchema = postSchema.extend({
  /** Wide banner shown above the article. */
  cover: z.string(),
  content: z.array(contentBlockSchema),
})

export const postNeighborsSchema = z.object({
  previous: postSchema.nullable(),
  next: postSchema.nullable(),
})

export const postListSchema = z.array(postSchema)

export const postPageSchema = z.object({
  items: postListSchema,
  /** Total number of posts matching the search. */
  total: z.number(),
  nextPage: z.number().nullable(),
})

export type Post = z.infer<typeof postSchema>
export type PostDetail = z.infer<typeof postDetailSchema>
export type PostPage = z.infer<typeof postPageSchema>
