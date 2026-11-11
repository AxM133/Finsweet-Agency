import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

import { useDebouncedValue } from '@/shared/lib'

/**
 * Search box state for "All posts": the typed value is debounced
 * and mirrored to the `?q=` URL param (so a search can be shared / reloaded).
 */
export function useArchiveSearch() {
  const [params, setParams] = useSearchParams()
  const urlValue = params.get('q') ?? ''
  const [value, setValue] = useState(urlValue)
  const search = useDebouncedValue(value.trim(), 300)

  useEffect(() => {
    if (search === urlValue) return

    setParams(
      (previous) => {
        const next = new URLSearchParams(previous)
        if (search) next.set('q', search)
        else next.delete('q')
        return next
      },
      { replace: true },
    )
  }, [search, urlValue, setParams])

  return { value, setValue, search }
}
