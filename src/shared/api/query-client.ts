import { QueryClient } from '@tanstack/react-query'

import { HttpError } from './http-error'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      // a missing resource will not appear on retry
      retry: (failureCount, error) => !(error instanceof HttpError && error.status === 404) && failureCount < 1,
      refetchOnWindowFocus: false,
    },
  },
})
