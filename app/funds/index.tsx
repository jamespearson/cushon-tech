import { useCallback } from 'react'
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { router } from 'expo-router'

import useFundSummaries from '../hooks/useFundSummaries'
import H1 from '../../components/H1'
import P from '../../components/P'
import Layout from '../../constants/layout'
import FundListItem from '../../components/FundListItem/FundListItem'
import { FlatList } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  container: {
    padding: Layout.paddingMedium,
    gap: Layout.paddingMedium,
    flex: 1
  },

  fundsContainer: {
    gap: Layout.paddingMedium,
    flex: 1

  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
export default function FundsScreen (): JSX.Element {
  const { data, isLoading, error } = useFundSummaries()

  const handleFundPress = useCallback(() => {
    router.push('investmentsummary')
  }, [])
  return (<View style={styles.container}>

        <H1 style={{textAlign: 'center'}}>Compare ISA investments</H1>
        <P>You can trust our comparison tables - we don't get paid any commission. Projections are useful, but they are not reliable indicators of future performance. Remember that investing is risky and you may get back less than the bad case or even less than you put in.</P>

        <View style={styles.fundsContainer}>
            {isLoading
              ? (<View style={styles.loadingContainer} testID={'activity-indicator'}>
                    <ActivityIndicator size={'large'} />
                </View>)
              : <FlatList
                    data={data}
                    renderItem={({ item }) => <FundListItem fund={item} onPress={handleFundPress} />}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={() => <View style={{ height: Layout.paddingMedium }} />}
                />}
        </View>

    </View>)
}
