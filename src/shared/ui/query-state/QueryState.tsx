import type { ReactNode } from 'react'

import { Button } from '../button'

/** The part of a react-query result (query or infinite query) that QueryState needs. */
type QueryLike<TData> = {
  isPending: boolean
  isError: boolean
  data: TData | undefined
  refetch: () => unknown
}

type QueryStateProps<TData> = {
  query: QueryLike<TData>
  skeleton: ReactNode
  children: (data: TData) => ReactNode
}

/**
 * Renders the three states of a react-query result:
 * skeleton while loading, retry block on error, `children(data)` on success.
 */
export function QueryState<TData>({ query, skeleton, children }: QueryStateProps<TData>) {
  if (query.isPending) return skeleton

  if (query.isError) {
    return (
      <div role="alert" className="flex flex-col items-start gap-4 bg-white p-8 shadow-card">
        <p className="text-ink">Something went wrong while loading this block.</p>
        <Button onClick={() => query.refetch()}>Try again</Button>
      </div>
    )
  }

  if (query.data === undefined) return skeleton

  return children(query.data)
}
