import { queryOptions } from '@tanstack/react-query'

import { mockRequest } from '@/shared/api'

import { serviceListSchema } from '../model/schema'
import type { Service } from '../model/schema'

const DESCRIPTION =
  'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service.'

const SERVICES: Service[] = [
  { id: '1', slug: 'technical-support', title: 'Technical support', description: DESCRIPTION, icon: 'support' },
  { id: '2', slug: 'testing', title: 'Testing Management', description: DESCRIPTION, icon: 'testing' },
  { id: '3', slug: 'development', title: 'Development', description: DESCRIPTION, icon: 'development' },
]

export const serviceQueries = {
  all: () =>
    queryOptions({
      queryKey: ['services'],
      queryFn: () => mockRequest(serviceListSchema, SERVICES),
    }),
}
