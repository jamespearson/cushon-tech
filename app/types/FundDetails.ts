import { FundSummary } from "./FundSummary";

export type FundDetails = FundSummary & {
    summary: string;
    description: string;
}