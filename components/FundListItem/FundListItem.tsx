import { Pressable, Text, StyleSheet, View } from 'react-native'
import { type Investment } from '../../app/types/Investment'
import { useCallback } from 'react'
import H2 from '../H2'
import H1 from '../H1'
import Layout from '../../constants/layout'
import { type FundSummary } from '../../app/types/FundSummary'
import H3 from '../H3'
import StyledButton from '../Button'

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    padding: Layout.paddingSmall,
    borderWidth: 1,
    borderRadius: 8
  },
  contentContainer: {

    gap: Layout.paddingMedium
  },
  valuesContainer: {
    gap: Layout.paddingSmall
  },
  changesContainer: {

  },
  returnsContainer: {
    flexDirection: 'row',
    gap: Layout.paddingMedium
  }
})

interface Props {
  fund: FundSummary
  onPress: (fund: FundSummary) => void
}

export default function FundListItem ({ fund, onPress }: Props): JSX.Element {
  const handlePress = useCallback(() => {
    onPress(fund)
  }, [onPress, fund])

  const numberFormatter = new Intl.NumberFormat()

  return <Pressable onPress={handlePress} style={styles.container}>
            <H2>{fund.title}</H2>
            <View style={styles.contentContainer}>
                <View style={styles.valuesContainer}>
                    <H3>Projected Returns</H3>

                    <View style={styles.returnsContainer}>
                      <View>
                        <Text>Most Likley</Text>
                        <Text>£{numberFormatter.format(fund.results.mostLikely.percent)}</Text>
                      </View>
                      <View>
                        <Text>Good Case</Text>
                        <Text>£{numberFormatter.format(fund.results.optimistic.percent)}</Text>
                      </View>
                      <View>
                        <Text>Bad Case</Text>
                        <Text>£{numberFormatter.format(fund.results.pessimistic.percent)}</Text>
                      </View>
                    </View>
                    <StyledButton mode="secondary" title="Select Fund" onPress={handlePress} />
                </View>

            </View>
        </Pressable>
}
