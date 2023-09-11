import { z } from 'zod'
import { SchemaFundSummary } from './SchemaFundSummary'

export const SchemaFundDetail = SchemaFundSummary.extend({
  description: z.string(),
  summary: z.string()
})
