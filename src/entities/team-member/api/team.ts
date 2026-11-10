import { queryOptions } from '@tanstack/react-query'

import { HttpError, mockRequest } from '@/shared/api'
import { images } from '@/shared/assets'

import { teamMemberListSchema, teamMemberSchema } from '../model/schema'
import type { TeamMember } from '../model/schema'

const BIO =
  'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.'

const TEAM: TeamMember[] = [
  { id: '1', slug: 'aron-pierce', name: 'Aron Pierce', role: 'Lead Engineer', photo: images.team1, bio: BIO },
  { id: '2', slug: 'marcus-bell', name: 'Marcus Bell', role: 'Product Designer', photo: images.team2, bio: BIO },
  { id: '3', slug: 'javena-melo', name: 'Javena Melo', role: 'CEO', photo: images.team3, bio: BIO },
  { id: '4', slug: 'rafael-costa', name: 'Rafael Costa', role: 'Marketing Lead', photo: images.team4, bio: BIO },
  { id: '5', slug: 'daniel-reed', name: 'Daniel Reed', role: 'Support Assist', photo: images.team5, bio: BIO },
  { id: '6', slug: 'tiago-silva', name: 'Tiago Silva', role: 'QA Engineer', photo: images.team6, bio: BIO },
  { id: '7', slug: 'lucas-weber', name: 'Lucas Weber', role: 'DevOps Engineer', photo: images.team7, bio: BIO },
]

export const teamMemberQueries = {
  all: () =>
    queryOptions({
      queryKey: ['team'],
      queryFn: () => mockRequest(teamMemberListSchema, TEAM),
    }),
  bySlug: (slug: string) =>
    queryOptions({
      queryKey: ['team', slug],
      queryFn: () => {
        const member = TEAM.find((item) => item.slug === slug)
        if (!member) throw new HttpError(404, 'Team member not found')
        return mockRequest(teamMemberSchema, member)
      },
    }),
}
