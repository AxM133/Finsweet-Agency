import { z } from 'zod'

export const serviceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.enum(['support', 'testing', 'development']),
})

export const serviceListSchema = z.array(serviceSchema)

export type Service = z.infer<typeof serviceSchema>
