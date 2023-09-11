import React, { useCallback, useRef, useState } from 'react'
import { View, Image, StyleSheet, TextInput } from 'react-native'
import { router } from 'expo-router'

import imageLogo from './assets/logo.webp'

import Layout from '../../constants/layout'
import StyledButton from '../../components/Button'

const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Layout.paddingMedium,
    padding: Layout.paddingMedium
  },

  logo: {
    height: 100,
    width: 100

  },

  textInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: Layout.paddingMedium,
    paddingVertical: Layout.paddingMedium,
    fontFamily: 'MuseoSansRounded300',
    fontSize: 16,
    borderRadius: 8

  }
})

export default function RegistrationScreen (): JSX.Element {
  const refEmail = useRef<TextInput>(null)
  const refPassword = useRef<TextInput>(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLoginDisabled = password.length === 0 || email.length === 0

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text)
  }, [setEmail])

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text)
  }, [setPassword])

  const handleLogin = useCallback(() => {
    router.push('portfolio')
  }, [isLoginDisabled])

  return (<View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />

        <TextInput placeholder="Email Address" style={styles.textInput} ref={refEmail} onChangeText={handleEmailChange}/>

        <TextInput placeholder="Password" style={styles.textInput} secureTextEntry ref={refPassword} onChangeText={handlePasswordChange} />

        <StyledButton mode="secondary" title="Sign In" onPress={handleLogin} disabled={isLoginDisabled} />
    </View>)
}
