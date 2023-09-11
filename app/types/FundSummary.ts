export type FundRiskLevel = 'high' | 'medium' | 'low'
export interface FundResultEstimate { percent: number, sampleAmount: number }

export interface FundSummary {
  title: string
  riskLevel: FundRiskLevel
  results: {
    mostLikely: FundResultEstimate
    pessimistic: FundResultEstimate
    optimistic: FundResultEstimate
  }
  charges: number
}
