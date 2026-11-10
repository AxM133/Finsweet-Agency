import { z } from 'zod'

export const teamMemberSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  photo: z.string(),
  bio: z.string(),
})

export const teamMemberListSchema = z.array(teamMemberSchema)

export type TeamMember = z.infer<typeof teamMemberSchema>
