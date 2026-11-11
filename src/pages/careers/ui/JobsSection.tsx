import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import { DEPARTMENTS, JobCard, JobCardSkeleton, jobQueries } from '@/entities/job'
import type { Department } from '@/entities/job'
import { cn } from '@/shared/lib'
import { QueryState, Reveal, Section } from '@/shared/ui'

type Filter = Department | 'All'
const FILTERS: readonly Filter[] = ['All', ...DEPARTMENTS]
const SKELETONS = Array.from({ length: 9 }, (_, index) => `skeleton-${index}`)
const GRID = 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'

export function JobsSection() {
  const query = useQuery(jobQueries.all())
  const [filter, setFilter] = useState<Filter>('All')

  return (
    <Section id="positions" aria-label="Open positions" className="pt-12 lg:pt-16">
      <Reveal className="bg-mint p-6 sm:p-12 lg:p-16">
        <div role="group" aria-label="Filter by department" className="mb-10 flex flex-wrap gap-3">
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              className={cn(
                'cursor-pointer px-5 py-2 text-sm transition-colors',
                filter === item ? 'bg-primary text-white' : 'bg-white text-ink hover:text-primary',
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <QueryState
          query={query}
          skeleton={
            <div className={GRID}>
              {SKELETONS.map((key) => (
                <JobCardSkeleton key={key} />
              ))}
            </div>
          }
        >
          {(jobs) => {
            const visible = filter === 'All' ? jobs : jobs.filter((job) => job.department === filter)

            return (
              <>
                <ul className={GRID}>
                  <AnimatePresence mode="popLayout">
                    {visible.map((job, index) => (
                      <motion.li
                        key={job.id}
                        layout
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: index * 0.04 }}
                      >
                        <JobCard job={job} />
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
                <p aria-live="polite" className="mt-8 text-xs text-muted">
                  {visible.length} open {visible.length === 1 ? 'position' : 'positions'}
                </p>
              </>
            )
          }}
        </QueryState>
      </Reveal>
    </Section>
  )
}
