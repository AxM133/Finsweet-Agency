import { z } from 'zod'

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

export const postListSchema = z.array(postSchema)

export type Post = z.infer<typeof postSchema>
