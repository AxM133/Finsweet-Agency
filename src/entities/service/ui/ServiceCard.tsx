import type { ComponentType } from 'react'
import { LuBug, LuCode, LuHeadset } from 'react-icons/lu'
import { Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { Button, Card, Heading, IconBadge, Skeleton } from '@/shared/ui'

import type { Service } from '../model/schema'

const ICONS: Record<Service['icon'], ComponentType<{ className?: string }>> = {
  support: LuHeadset,
  testing: LuBug,
  development: LuCode,
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card
      as="article"
      className="flex h-full flex-col gap-5 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgb(255_161_85/0.45)]"
    >
      <IconBadge icon={ICONS[service.icon]} />
      <Heading as="h3" size="sm">
        {service.title}
      </Heading>
      <p className="flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
      <Button
        as={Link}
        to={`${ROUTES.services}#${service.slug}`}
        variant="link"
        withArrow
        className="self-start text-primary"
      >
        Read More
      </Button>
    </Card>
  )
}

export function ServiceCardSkeleton() {
  return <Skeleton className="h-64 w-full bg-white/60" />
}
