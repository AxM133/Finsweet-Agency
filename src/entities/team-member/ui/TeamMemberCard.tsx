import { generatePath, Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { Skeleton, SocialLinks } from '@/shared/ui'

import type { TeamMember } from '../model/schema'

/**
 * Square photo. On desktop a dark overlay with name, role and socials
 * fades in on hover / keyboard focus; on touch screens a caption is always shown.
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative aspect-square overflow-hidden bg-surface">
      <img
        src={member.photo}
        alt={member.name}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-linear-to-t from-ink/85 via-ink/20 to-transparent p-6 lg:justify-center lg:bg-none lg:bg-ink/85 lg:p-10 lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-focus-within:opacity-100 lg:group-hover:opacity-100">
        <Link
          to={generatePath(ROUTES.teamMember, { slug: member.slug })}
          className="text-xl font-medium text-white after:absolute after:inset-0 focus-visible:outline-none"
        >
          {member.name}
        </Link>
        <p className="text-sm text-white/60">{member.role}</p>
        <SocialLinks networks={['twitter', 'instagram', 'linkedin']} className="relative z-10 mt-4 text-white" />
      </div>
    </article>
  )
}

export function TeamMemberCardSkeleton() {
  return <Skeleton className="aspect-square w-full" />
}
