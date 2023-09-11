import { render, screen, fireEvent } from '@testing-library/react-native'
import { router } from 'expo-router'
import InvestmentSuccessScreen from '..'

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn()
  }
}))

describe('Investment Success Screen', () => {
  it('should render as expected', () => {
    render(<InvestmentSuccessScreen />)

    expect(screen.toJSON()).toMatchSnapshot()
  })

  it('should navigate to the Portfoilo screen', () => {
    render(<InvestmentSuccessScreen />)

    fireEvent.press(screen.getByText('VIEW INVESTMENTS'))

    expect(router.push).toHaveBeenCalledWith('portfolio')
  })
})
