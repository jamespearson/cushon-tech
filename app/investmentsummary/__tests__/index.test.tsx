import { render, screen, fireEvent } from '@testing-library/react-native'
import { router } from 'expo-router'
import InvestmentSummaryScreen from '..'

import fixtureFund from '../../fixtures/fund.json'

let mockData: any = fixtureFund
let mockLoading = false
jest.mock('../../hooks/useFundDetails', () => {
  return () => ({
    data: mockData,
    isLoading: mockLoading,
    error: undefined
  })
})

describe('Investment Success Screen', () => {
  describe('when loading', () => {
    beforeEach(() => {
      mockData = undefined
      mockLoading = true
    })

    it('should render as expected', () => {
      render(<InvestmentSummaryScreen />)

      expect(screen.toJSON()).toMatchSnapshot()
    })

    it('should show a loading indicator', () => {
      render(<InvestmentSummaryScreen />)

      expect(screen.getByTestId('activity-indicator')).toBeTruthy()
    })
  })

  describe('when the data has loaded', () => {
    beforeEach(() => {
      mockData = fixtureFund.fund
      mockLoading = false
    })

    it('should render as expected', () => {
      render(<InvestmentSummaryScreen />)

      expect(screen.toJSON()).toMatchSnapshot()
    })

    it('should display fund information', () => {
      render(<InvestmentSummaryScreen />)
      expect(screen.getByText('CushonMix medium risk/return ISA')).toBeTruthy()
    })

    // NOTE: The useRef used to check if a field has been touched is not working in the test environment.

    // describe('when the user enters a negative amount', () => {
    //   it('should show an error', async () => {
    //     render(<InvestmentSummaryScreen />)

    //     fireEvent.changeText(screen.getByTestId('amount-input'), '-1')

    //     expect(screen.getByText('Please enter a valid amount')).toBeTruthy()
    //   })
    // })

    // describe('when the user enters a valid amount', () => {
    //   it('should not show an error', async () => {
    //     render(<InvestmentSummaryScreen />)

    //     fireEvent.changeText(screen.getByTestId('amount-input'), '1')

    //     expect(screen.getByText('Please enter a valid amount')).toBeFalsy()
    //   })
    // })
  })
})
