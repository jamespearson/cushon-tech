import { type FundSummary } from './FundSummary'

export interface Investment {
  id: string
  fund: FundSummary
  createdAt: string
  initialAmount: number
  currentValue: number
}
