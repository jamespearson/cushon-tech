import { type PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

const styles = {
  label: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 14,
    lineHeight: 22,
    color: 'red'
  }
}

interface Props extends PropsWithChildren {
  style?: object
  visible?: boolean
}

export default function Label ({ children, style = {}, visible }: Props): JSX.Element {
  return visible === true ? <Text style={{ ...styles.label, ...style }}>{children}</Text> : <View></View>
}
