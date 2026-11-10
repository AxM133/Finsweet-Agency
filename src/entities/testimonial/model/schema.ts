import { z } from 'zod'

export const testimonialSchema = z.object({
  id: z.string(),
  quote: z.string(),
  author: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string().optional(),
  }),
})

export const testimonialListSchema = z.array(testimonialSchema)

export type Testimonial = z.infer<typeof testimonialSchema>
