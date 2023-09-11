import { useCallback } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import { router } from 'expo-router'

import Colors from '../../constants/colors'

import imageLogo from './assets/cushon.png'
import Typography from '../../constants/typography'
import Layout from '../../constants/layout'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackgroundColor
  },

  logo: {
    maxWidth: '100%',
    resizeMode: 'cover',
    flex: 1
  },

  logoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'red',
    margin: 0,
    padding: 0
  },

  controlsContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryBackgroundColor,
    paddingHorizontal: Layout.paddingLarge,
    gap: Layout.paddingMedium
  }

})

export default function WelcomeScreen (): JSX.Element {
  const handleLoginPress = useCallback(() => {
    router.push('login')
  }, [router])

  const handleLearnMorePress = useCallback(() => {
    router.push('funds')
  }, [router])

  return (<View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={imageLogo} style={styles.logo} />
        </View>
        <View style={styles.controlsContainer}>
            <Text style={{ ...Typography.h1, color: Colors.secondaryColor, textAlign: 'center' }}>A better financial future worth saving for</Text>
            <Text style={{ ...Typography.subtitle, color: Colors.secondaryColor }}>Savings, investments and the world's first Net Zero pension, all together. Set up your ISA today!</Text>
            <Button mode="primary" onPress={handleLoginPress} title={'Log in'} />
            <Button mode="secondary" outlined={true} onPress={handleLearnMorePress} title={'Learn more'} />
        </View>
    </View>)
}
