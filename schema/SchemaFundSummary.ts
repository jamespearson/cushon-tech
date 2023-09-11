import { z } from 'zod'

export const SchemaFundSummary = z
  .object({
    title: z.string(),
    riskLevel: z.enum(['high', 'medium', 'low']),
    results: z.object({
      mostLikely: z.object({
        percent: z.number(),
        sampleAmount: z.number()
      }),
      pessimistic: z.object({
        percent: z.number(),
        sampleAmount: z.number()
      }),
      optimistic: z.object({
        percent: z.number(),
        sampleAmount: z.number()
      })
    }),
    charges: z.number()
  })
