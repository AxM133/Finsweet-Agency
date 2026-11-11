import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'

import { mockRequest } from '@/shared/api'

import type { ApplyToJobValues } from '../model/schema'

const responseSchema = z.object({ jobSlug: z.string() })

type ApplyPayload = ApplyToJobValues & { jobSlug: string }

export function useApplyToJob() {
  return useMutation({
    mutationFn: (payload: ApplyPayload) => mockRequest(responseSchema, { jobSlug: payload.jobSlug }, 1300),
  })
}
