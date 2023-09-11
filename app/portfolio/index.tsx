import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import useInvestments from '../hooks/useInvestments'
import Layout from '../../constants/layout'
import InvestmentListItem from '../../components/InvestmentListItem/InvestmentListItem'
import { useMemo } from 'react'
import H2 from '../../components/H2/H2'
import H1 from '../../components/H1/H1'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    margin: Layout.paddingMedium,
    display: 'flex',
    gap: Layout.paddingMedium
  }
})

export default function Portfolio (): JSX.Element {
  const { data, isLoading } = useInvestments()

  const handleInvestmentPress = (investmentId: string): void => {
    router.push(`/investment/${investmentId}`)
  }

  const nf = new Intl.NumberFormat()

  const investmentTotal = useMemo(() => {
    if (data === undefined) return 0
    return data.reduce((total, investment) => { return total + investment.currentValue }, 0)
  }, [data])

  return isLoading
    ? (<View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} />
    </View>)
    : (<View style={styles.container}>

        <View>
          <H2 style={{ textAlign: 'center' }}>Your investment total</H2>
          <H1 style={{ textAlign: 'center' }}>£{nf.format(investmentTotal)}</H1>
        </View>
        {data?.map((investment) => {
          return <InvestmentListItem key={investment.id} investment={investment} onPress={handleInvestmentPress} />
        })}
        </View>
      )
}
