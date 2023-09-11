/**
 * @jest-environment jsdom
 */
import { renderHook, waitFor } from '@testing-library/react'
import useFundDetails from '../useFundDetails'

import fetch from "jest-fetch-mock";

describe('useFundDetails', () => {

    it("should make a data request", async () => {
        const { result } = renderHook(() => useFundDetails('test-fund-id'))

        await waitFor(() => {
            result.current.data !== undefined
        })

        expect(fetch).toHaveBeenCalledWith('https://gist.githubusercontent.com/jamespearson/5bdee13022160d667a6e13ba24281b4a/raw/0f6bec5c378971f392e76c4726f27ec4681bfbdc/fund.json')
        
    })
 
})