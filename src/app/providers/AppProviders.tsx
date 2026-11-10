import { QueryClientProvider } from '@tanstack/react-query'
import { MotionConfig } from 'motion/react'
import type { PropsWithChildren } from 'react'

import { queryClient } from '@/shared/api'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </QueryClientProvider>
  )
}
