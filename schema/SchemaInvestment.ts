import { z } from 'zod'

import { SchemaFundSummary } from './SchemaFundSummary'

export const SchemaInvestment = z
  .object({
    id: z.string(),
    createdAt: z.string(),
    initialAmount: z.number(),
    currentValue: z.number(),
    fund: SchemaFundSummary
  })
