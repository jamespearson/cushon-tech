import { type PropsWithChildren } from 'react'
import { Text } from 'react-native'

const styles = {
  h2: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 18,
    lineHeight: 24
  }
}

interface Props extends PropsWithChildren {
  style?: object
}

export default function H2 ({ children, style = {} }: Props): JSX.Element {
  return <Text style={{ ...styles.h2, ...style }}>{children}</Text>
}
