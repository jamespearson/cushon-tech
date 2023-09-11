/**
 * @jest-environment jsdom
 */


import { renderHook, act } from '@testing-library/react'
import useCreateAccountMutation from '../useCreateAccountMutation'

import fetch from "jest-fetch-mock";



describe('useCreateAccountMutation', () => {

    it("should make a data request", async () => {
        const { result } = renderHook(() => useCreateAccountMutation())

        act(() => {
            result.current.createAccount('test@test.xom', 'test')
        })

        expect(fetch).toHaveBeenCalled()
        
    })
 
})