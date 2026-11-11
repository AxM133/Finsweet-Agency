import { generatePath } from 'react-router'

import { ROUTES } from '@/shared/config'

export function getPostPath(slug: string) {
  return generatePath(ROUTES.blogPost, { slug })
}
