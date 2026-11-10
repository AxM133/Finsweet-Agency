import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import { teamMemberQueries, TeamMemberCard, TeamMemberCardSkeleton } from '@/entities/team-member'
import { ROUTES } from '@/shared/config'
import {
  ArrowRightIcon,
  Eyebrow,
  Heading,
  PixelCorner,
  QueryState,
  Reveal,
  Section,
  Stagger,
  StaggerItem,
} from '@/shared/ui'

const SKELETONS = Array.from({ length: 8 }, (_, index) => `skeleton-${index}`)
const GRID = 'grid grid-cols-2 lg:grid-cols-4'

function JoinTeamTile() {
  return (
    <Link
      to={ROUTES.careers}
      className="group relative flex aspect-square flex-col justify-between bg-primary p-6 text-white transition-colors hover:bg-primary-dark sm:p-10"
    >
      <PixelCorner className="size-10" />
      <Eyebrow tone="light" className="mt-8">
        We’re hiring
      </Eyebrow>
      <div className="flex items-end justify-between gap-4">
        <span className="text-xl leading-snug font-semibold sm:text-2xl">Join our team</span>
        <ArrowRightIcon className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-2" />
      </div>
    </Link>
  )
}

export function TeamSection() {
  const query = useQuery(teamMemberQueries.all())

  return (
    <Section aria-labelledby="team-title" className="pb-0 lg:pb-0">
      <Reveal className="flex max-w-xl flex-col gap-5">
        <Eyebrow>Meet our team</Eyebrow>
        <Heading id="team-title" size="lg">
          Teamwork is the only way we work
        </Heading>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Through True Rich Attended does no end it his mother since real had half every him case in packages
          enquire we up ecstatic unsatiable.
        </p>
      </Reveal>

      <div className="mt-14">
        <QueryState
          query={query}
          skeleton={
            <div className={GRID}>
              {SKELETONS.map((key) => (
                <TeamMemberCardSkeleton key={key} />
              ))}
            </div>
          }
        >
          {(team) => (
            <Stagger interval={0.07} className={GRID}>
              {team.map((member) => (
                <StaggerItem key={member.id}>
                  <TeamMemberCard member={member} />
                </StaggerItem>
              ))}
              <StaggerItem>
                <JoinTeamTile />
              </StaggerItem>
            </Stagger>
          )}
        </QueryState>
      </div>
    </Section>
  )
}
