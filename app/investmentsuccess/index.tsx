import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../../constants/colors'
import H1 from '../../components/H1'
import H3 from '../../components/H3'
import StyledButton from '../../components/Button'
import { useCallback } from 'react'
import { router } from 'expo-router'
import Layout from '../../constants/layout'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.paddingMedium,
    gap: Layout.paddingMedium
  }
})

export default function InvestmentSucessScreen (): JSX.Element {
  const handleNavigation = useCallback(() => {
    router.push('portfolio')
  }, [router])

  return (<View style={styles.container}>
        <FontAwesome name="check-circle" size={128} color={Colors.secondaryBackgroundColor} />
        <H1>Congratulations</H1>
        <H3>Your investment was successful.</H3>

        <StyledButton title="View investments" mode="secondary" onPress={handleNavigation} />
    </View>)
}
