import type { ComponentType } from 'react'

/**
 * Generic helper for lazy routes: takes a dynamic import and the name
 * of the exported page component, and returns a react-router `lazy` loader.
 *
 *   lazy: lazyPage(() => import('@/pages/home'), 'HomePage')
 */
export function lazyPage<TName extends string>(
  load: () => Promise<Record<TName, ComponentType>>,
  name: TName,
) {
  return async () => ({ Component: (await load())[name] })
}
