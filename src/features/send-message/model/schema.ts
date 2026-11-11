import { z } from 'zod'

export const sendMessageSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.email('Please enter a valid e-mail address'),
  subject: z.string().trim().min(3, 'Please add a subject'),
  message: z.string().trim().min(10, 'Message should be at least 10 characters'),
})

export type SendMessageValues = z.infer<typeof sendMessageSchema>
