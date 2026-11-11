import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'

import { mockRequest } from '@/shared/api'

import type { SendMessageValues } from '../model/schema'

const responseSchema = z.object({ email: z.string() })

export function useSendMessage() {
  return useMutation({
    mutationFn: (values: SendMessageValues) => mockRequest(responseSchema, values, 1100),
  })
}
