import * as Font from 'expo-font'
import { Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'welcome/index'
}

const customFonts = {
  MuseoSansRounded300: require('./fonts/MuseoSansRounded-300.ttf'),
  MuseoSansRounded500: require('./fonts/MuseoSansRounded-500.ttf'),
  MuseoSansRounded700: require('./fonts/MuseoSansRounded-700.ttf')
}

export default function HomeLayout (): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  async function fetchFonts (): Promise<void> { await Font.loadAsync(customFonts) }

  useEffect(() => {
    fetchFonts().then(() => {
      
      setIsLoaded(true)
    }).catch((error) => {
      console.log('error :>> ', error)
    })
  }, [])

  if (!isLoaded) {
    return <View><Text>Loading</Text></View>
  }

  return (
        <Stack screenOptions={{headerBackTitleVisible: false}}>
            <Stack.Screen name="welcome/index" options={{ headerShown: false }} />
            <Stack.Screen name="login/index" options={{ headerShown: false }} />
            <Stack.Screen name="portfolio/index" options={{ title: 'Portfoilo' }} />
            <Stack.Screen name="investmentsuccess/index" options={{ title: 'Success' }} />
            <Stack.Screen name="investmentsummary/index" options={{ title: 'Invest' }} />
        </Stack>
  )
}
