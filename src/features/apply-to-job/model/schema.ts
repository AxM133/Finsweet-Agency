import { z } from 'zod'

export const applyToJobSchema = z.object({
  firstName: z.string().trim().min(2, 'Please enter your first name'),
  lastName: z.string().trim().min(2, 'Please enter your last name'),
  email: z.email('Please enter a valid e-mail address'),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{7,}$/, 'Please enter a valid phone number'),
  motivation: z.string().trim().min(20, 'Tell us a little more (at least 20 characters)'),
  consent: z.boolean().refine((value) => value, 'You need to accept the privacy policy'),
})

export type ApplyToJobValues = z.infer<typeof applyToJobSchema>
