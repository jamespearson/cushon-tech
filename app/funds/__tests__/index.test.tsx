import { render, screen } from '@testing-library/react-native'

import FundsScreen from '..'

import fixtures from "../../fixtures/fundSummaries.json"

let mockLoading = false
let mockData: any = fixtures.funds

jest.mock('../../hooks/useFundSummaries', () => {
  return () => ({
    data: mockData,
    isLoading: mockLoading,
    error: undefined
  })
})

describe('Funds Screen', () => {
  describe('it should render a list of available funds', () => {
    it('should render as expected', () => {
      render(<FundsScreen />)

      expect(screen.toJSON()).toMatchSnapshot()
    })
  })

  describe('when loading', () => {
    beforeEach(() => {
      mockData = { hello: 'world' }
      mockLoading = true
    })

    it('should display the activity indicator', () => {
      render(<FundsScreen />)

      expect(screen.getByTestId('activity-indicator')).toBeTruthy()
    })
  })

  describe('when the data has loaded', () => {
    beforeEach(() => {
      mockData = fixtures.funds
      mockLoading = false
    })

    it('should display the funds', () => {
      render(<FundsScreen />)

      expect(screen.getByText('VT AJ Bell Balanced')).toBeTruthy()
      expect(screen.getByText('Fidelity Multi Asset Allocator')).toBeTruthy()
    })
  })
})
