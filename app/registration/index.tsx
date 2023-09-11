import { View, StyleSheet, TextInput } from 'react-native'

import useTextInputValidation from '../hooks/useTextInputValidation/useTextInputValidation'

import H1 from '../../components/H1'
import H2 from '../../components/H2'
import InputWarning from '../../components/InputWarning'
import Label from '../../components/Label'
import Layout from '../../constants/layout'
import StyledButton from '../../components/Button'
import { useCallback } from 'react'
import useCreateAccountMutation from '../hooks/useCreateAccountMutation'
import { router } from 'expo-router'

const styles = StyleSheet.create({
  container: {
    padding: Layout.paddingMedium,
    gap: Layout.paddingMedium
  },

  formContainer: {
    gap: Layout.paddingMedium
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
  const { createAccount, isLoading, error } = useCreateAccountMutation()
  const emailValidator = useTextInputValidation((value) => value.length >= 8)
  const passwordValidator = useTextInputValidation((value) => value.length >= 8)
  const passwordRepeatValidator = useTextInputValidation((value) => value === passwordValidator.value)

  const isValid = emailValidator.isValid && passwordValidator.isValid && passwordRepeatValidator.isValid

  const handleSubmission = useCallback(async () => {
    if (isValid) {
      await createAccount(emailValidator.value, passwordValidator.value)
      router.push('portfolio')
    }
  }, [isValid])

  return (<View style={styles.container}>
    <H1 style={{ textAlign: 'center' }}>Registration</H1>

    <View style={styles.formContainer}>

        <H2>What email and password would you like to use?</H2>

        <View>
          <Label>Email</Label>
          <TextInput style={styles.textInput} placeholder='Email' {...emailValidator.attributes} />
        </View>

        <View>
          <Label>Password</Label>
          <TextInput style={styles.textInput} placeholder='Password' secureTextEntry {...passwordValidator.attributes} />
          <InputWarning visible={passwordValidator.hasHadFocus && !passwordValidator.isValid}>Must be at least 8 characters long</InputWarning>
        </View>

        <View>
          <Label>Repeat Password</Label>
          <TextInput style={styles.textInput} placeholder='Repeat Password' secureTextEntry {...passwordRepeatValidator.attributes} />
          <InputWarning visible={passwordRepeatValidator.hasHadFocus && !passwordRepeatValidator.isValid}>Passwords must match</InputWarning>
        </View>

        {error !== undefined && <InputWarning visible={true}>{error}</InputWarning>}

        <StyledButton mode="secondary" title="Create Account" onPress={handleSubmission} disabled={isLoading}/>
    </View>
  </View>)
}
