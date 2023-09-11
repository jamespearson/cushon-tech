import { type PropsWithChildren } from 'react'
import { Text } from 'react-native'

const styles = {
  label: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 14,
    lineHeight: 22
  }
}

interface Props extends PropsWithChildren {
  style?: object
}

export default function Label ({ children, style = {} }: Props): JSX.Element {
  return <Text style={{ ...styles.label, ...style }}>{children}</Text>
}
