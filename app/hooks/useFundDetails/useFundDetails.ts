import { useState, useEffect } from 'react'

import { type FundDetails } from '../../types/FundDetails'
import { SchemaFundDetail } from '../../../schema/SchemaFundDetail'

interface UseFundDetailsResponse {
  data: FundDetails | undefined
  isLoading: boolean
  error: Error | undefined
}

// Sample Data
const url = 'https://gist.githubusercontent.com/jamespearson/5bdee13022160d667a6e13ba24281b4a/raw/0f6bec5c378971f392e76c4726f27ec4681bfbdc/fund.json'

const useFundDetails = (fundId: string): UseFundDetailsResponse => {
  const [data, setData] = useState<FundDetails | undefined>()
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

        const fund: FundDetails = SchemaFundDetail.parse(json.fund)

        setData(fund)
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

export default useFundDetails
