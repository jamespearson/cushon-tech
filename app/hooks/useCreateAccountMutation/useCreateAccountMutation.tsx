import { useState } from 'react'

interface CreateAccountResponse {
  success: boolean
  account?: {
    uuid: string
    authToken: string
  }
  error?: string
}

const apiUrl = 'https://gist.githubusercontent.com/jamespearson/5bdee13022160d667a6e13ba24281b4a/raw/88bde206dd85299bb0711bcc8447897fd962e7c0/registration.json'

function useCreateAccountMutation (): { createAccount: (email: string, password: string) => Promise<CreateAccountResponse>, isLoading: boolean, error?: string } {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()

  const createAccount = async (email: string, password: string): Promise<CreateAccountResponse> => {
    setLoading(true)
    setError(undefined)

    try {
      const response = await fetch(apiUrl, {
        method: 'GET', //  Would be 'POST', but we're using dummy data.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        throw new Error('Failed to create account')
      }

      const responseData = await response.json()
      setLoading(false)

      return { success: true, account: responseData }
    } catch (err: any) {
      setLoading(false)
      setError(err.message !== undefined ? err.message : 'An error occurred while creating the account')
      return { success: false, error }
    }
  }

  return { createAccount, isLoading: loading, error }
}

export default useCreateAccountMutation
