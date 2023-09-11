import { useState, useEffect } from 'react'

import { type Investment } from '../../types/Investment'
import { SchemaInvestment } from '../../../schema/SchemaInvestment'

interface useInvestmentsResponse {
  data: Investment[] | undefined
  isLoading: boolean
  error: Error | undefined
}

// Sample Data
const url = 'https://gist.githubusercontent.com/jamespearson/5bdee13022160d667a6e13ba24281b4a/raw/88bde206dd85299bb0711bcc8447897fd962e7c0/portfolio.json'

const useInvestments = (): useInvestmentsResponse => {
  const [data, setData] = useState<Investment[] | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const json = await response.json()

        const investments = json.investments.map(SchemaInvestment.parse)

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

export default useInvestments
