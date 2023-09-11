import { Pressable, Text, StyleSheet, View } from 'react-native'
import { type Investment } from '../../app/types/Investment'
import { useCallback } from 'react'
import H2 from '../H2'
import H1 from '../H1'
import Layout from '../../constants/layout'

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: Layout.paddingSmall,
    borderWidth: 1,
    borderRadius: 8
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  valuesContainer: {
    alignSelf: 'center'
  },
  changesContainer: {

  }
})

interface Props {
  investment: Investment
  onPress: (investmendId: string) => void
}

export default function InvestmentListItem ({ investment: { id, fund, initialAmount, currentValue }, onPress }: Props): JSX.Element {
  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])

  const numberFormatter = new Intl.NumberFormat()

  const changeValue = currentValue - initialAmount
  const changePercentage = ((changeValue / initialAmount) * 100).toFixed(2)
  const positiveChange = changeValue > 0

  return <Pressable onPress={handlePress} style={styles.container}>
            <H2>{fund.title}</H2>
            <View style={styles.contentContainer}>
                <View style={styles.valuesContainer}>
                    <Text>Initial amount: £{numberFormatter.format(initialAmount)}</Text>
                    <Text>Current value: £{numberFormatter.format(currentValue)}</Text>
                </View>
                <View style={styles.changesContainer}>
                    <H1>{positiveChange ? '+' : ''}{changePercentage}%</H1>
                </View>
            </View>
        </Pressable>
}
