import type { ComponentType, SVGProps } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

import { SITE } from '@/shared/config'
import type { SocialNetwork } from '@/shared/config'
import { cn } from '@/shared/lib'

const ICONS: Record<SocialNetwork, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
}

type SocialLinksProps = {
  /** Show only some networks (team member page has no LinkedIn). */
  networks?: readonly SocialNetwork[]
  className?: string
}

/** Icons inherit the text colour of the parent (`currentColor`). */
export function SocialLinks({ networks, className }: SocialLinksProps) {
  const items = networks ? SITE.socials.filter((item) => networks.includes(item.network)) : SITE.socials

  return (
    <ul className={cn('flex items-center gap-6', className)}>
      {items.map(({ network, href }) => {
        const Icon = ICONS[network]

        return (
          <li key={network}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={network}
              className="block transition-opacity hover:opacity-70"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
