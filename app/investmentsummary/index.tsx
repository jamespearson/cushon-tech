import { useCallback } from 'react'
import { Platform, View, Text, StyleSheet, ActivityIndicator, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import Layout from '../../constants/layout'
import H1 from '../../components/H1'
import H2 from '../../components/H2'

import useFundDetails from '../hooks/useFundDetails'
import { ScrollView } from 'react-native-gesture-handler'

import StyledButton from '../../components/Button'

import P from '../../components/P'

import imageGraph from './assets/graph.webp'
import useTextInputValidation from '../hooks/useTextInputValidation/useTextInputValidation'
import InputWarning from '../../components/InputWarning'
import { router } from 'expo-router'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Layout.paddingMedium,
    gap: Layout.paddingMedium
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  scrollContainer: {
    flex: 1

  },

  scrollContent: {
    gap: Layout.paddingMedium
  },

  investContainer: {
    borderWidth: 1,
    borderColor: 'red', // Colors.primaryBackgroundColor,
    padding: Layout.paddingMedium,
    borderRadius: 8,
    gap: Layout.paddingSmall

  },

  textInput: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: Layout.paddingMedium,
    paddingVertical: Layout.paddingMedium,
    fontFamily: 'MuseoSansRounded300',
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: 'white'

  },

  amountContainer: {

    flexDirection: 'row',
    gap: Layout.paddingSmall,
    alignItems: 'center'
  },

  graph: {
    flex: 1
  }
})

export default function InvestmentSummaryScreen (): JSX.Element {
  const { data, isLoading } = useFundDetails('sample-fund-id')
  const validateAmount = useTextInputValidation((text) => 
    !isNaN(Number(text)) &&
    Number(text) > 0
  )

  const handleSubmit = useCallback(() => {
    router.push('investmentsuccess')
  }, [])

  const isAmountInvalid = validateAmount.hasHadFocus && 
                          !validateAmount.isValid &&
                          validateAmount.value !== ''


  return isLoading || data === undefined
    ? (<View style={styles.loadingContainer}>
         <ActivityIndicator size={'large'} testID="activity-indicator" />
    </View>)

    : <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 20}
        style={{ flex: 1 }}>
        <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.scrollContent}>
            <H1 style={{ textAlign: 'center' }}>{data.title}</H1>

            <H2>{data.summary}</H2>

            <P>{data.description}</P>

            <Image source={imageGraph} style={styles.graph} />
            </View>
        </ScrollView>

        <View style={styles.investContainer}>
            <H2>Invest now</H2>
            <View style={styles.amountContainer}>
                <Text style={{ fontSize: 20 }}>£</Text>
                <TextInput testID="amount-input" keyboardType="numeric" placeholder='25000' style={{ ...styles.textInput, flex: 1 }} {...validateAmount.attributes} />
                <StyledButton mode="secondary" title="Go" onPress={handleSubmit} disabled={isAmountInvalid}/>
            </View>
            <InputWarning visible={isAmountInvalid}>Please enter a valid amount</InputWarning>

        </View>
      </View>
      </KeyboardAvoidingView>
}
