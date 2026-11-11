import { motion } from 'motion/react'

import type { TeamMember } from '@/entities/team-member'
import { Avatar, EASE, Heading, Section, SocialLinks, Stagger, StaggerItem } from '@/shared/ui'

export function MemberProfile({ member }: { member: TeamMember }) {
  return (
    <Section aria-labelledby="member-name" containerClassName="flex flex-col items-center gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <Avatar src={member.photo} name={member.name} size="xl" />
      </motion.div>

      <Stagger interval={0.12} delay={0.3} className="flex flex-col items-center gap-4">
        <StaggerItem>
          <Heading as="h1" id="member-name" size="lg">
            {member.name}
          </Heading>
        </StaggerItem>
        <StaggerItem>
          <p className="text-sm text-muted">{member.role}</p>
        </StaggerItem>
        <StaggerItem>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">{member.bio}</p>
        </StaggerItem>
        <StaggerItem>
          <SocialLinks networks={['facebook', 'twitter', 'instagram']} className="mt-2 text-ink" />
        </StaggerItem>
      </Stagger>
    </Section>
  )
}
