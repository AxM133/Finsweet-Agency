import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'

import { mockRequest } from '@/shared/api'

import type { SubscribeValues } from '../model/schema'

const subscribeResponseSchema = z.object({ email: z.string() })

export function useSubscribe() {
  return useMutation({
    mutationFn: (values: SubscribeValues) => mockRequest(subscribeResponseSchema, values, 900),
  })
}
