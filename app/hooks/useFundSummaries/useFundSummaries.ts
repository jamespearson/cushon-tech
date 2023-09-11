import { useState, useEffect } from 'react'
import { type FundSummary } from '../../types/FundSummary'
import { SchemaFundSummary } from '../../../schema/SchemaFundSummary'

interface UseFundSummariesResponse {
  data: FundSummary[] | undefined
  isLoading: boolean
  error: Error | undefined
}

// Sample Data
const url = 'https://gist.githubusercontent.com/jamespearson/5bdee13022160d667a6e13ba24281b4a/raw/44e28513bb04c34969c5be4eb981fd74ff6a442c/funds.json'

const useFundSummaries = (): UseFundSummariesResponse => {
  const [data, setData] = useState<FundSummary[] | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const json = await response.json()

        const investments = json.funds.map(SchemaFundSummary.parse)

        setData(investments)
        setIsLoading(false)
      } catch (err: any) {
        setError(err)
        setIsLoading(false)
      }
    }

    fetchData().catch((err) => {
      setError(err)
      setIsLoading(false)
    })
  }, [url])

  return { data, isLoading, error }
}

export default useFundSummaries
