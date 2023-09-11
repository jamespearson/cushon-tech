import { View } from 'react-native'
import React from 'react'
import { Redirect, useRootNavigation } from 'expo-router'

// index.tsx, referring to route /

export default function IndexScreen (): JSX.Element {
  const navigation = useRootNavigation()
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    if (!navigation?.isReady) return

    setReady(true)
  }, [navigation?.isReady])

  if (ready) return <Redirect href="/welcome" />

  return <View></View>
}
