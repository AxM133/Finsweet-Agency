import { z } from 'zod'

export const subscribeSchema = z.object({
  email: z.email('Please enter a valid e-mail address'),
})

export type SubscribeValues = z.infer<typeof subscribeSchema>
