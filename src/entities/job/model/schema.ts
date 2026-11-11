import { z } from 'zod'

export const DEPARTMENTS = ['Engineering', 'Design', 'Quality', 'Marketing', 'People'] as const

export const jobSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  department: z.enum(DEPARTMENTS),
  location: z.string(),
  type: z.string(),
  salary: z.string(),
  /** "No equity", "4 to 5 Yrs Exp", "Fresher" … */
  note: z.string(),
})

export const jobDetailSchema = jobSchema.extend({
  /** "Remote, India , 4 to 5 Years Of Experience" */
  summary: z.string(),
  positions: z.number(),
  intro: z.string(),
  details: z.array(z.string()),
  requirements: z.array(z.string()),
  responsibilities: z.array(z.string()),
})

export const jobListSchema = z.array(jobSchema)

export type Department = (typeof DEPARTMENTS)[number]
export type Job = z.infer<typeof jobSchema>
export type JobDetail = z.infer<typeof jobDetailSchema>
