import { type PropsWithChildren } from 'react'
import { Text } from 'react-native'

const styles = {
  h1: {
    fontFamily: 'MuseoSansRounded500',
    fontSize: 32,
    lineHeight: 42
  }
}

interface Props extends PropsWithChildren {
  style?: object
}

export default function H1 ({ children, style = {} }: Props): JSX.Element {
  return <Text style={{ ...styles.h1, ...style }}>{children}</Text>
}
