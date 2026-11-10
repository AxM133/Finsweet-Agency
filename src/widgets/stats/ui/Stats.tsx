import { cn } from '@/shared/lib'
import { CountUp, List } from '@/shared/ui'

import { STATS } from '../model/stats'

const layouts = {
  row: 'grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4',
  grid: 'grid grid-cols-2 gap-x-8 gap-y-12',
} as const

type StatsProps = {
  layout?: keyof typeof layouts
  className?: string
}

/** Company numbers with count-up animation. */
export function Stats({ layout = 'row', className }: StatsProps) {
  return (
    <List
      items={STATS}
      getKey={(stat) => stat.label}
      className={cn(layouts[layout], className)}
      renderItem={(stat) => (
        <div className="flex flex-col gap-3">
          <CountUp to={stat.value} suffix={stat.suffix} className="text-3xl font-semibold text-ink" />
          <span aria-hidden="true" className="flex h-[3px] w-8">
            <span className="w-2 bg-primary" />
            <span className="flex-1 bg-orange" />
          </span>
          <span className="text-sm font-medium text-ink">{stat.label}</span>
        </div>
      )}
    />
  )
}
