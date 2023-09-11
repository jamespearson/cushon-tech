import { type PropsWithChildren } from 'react'
import { Text } from 'react-native'

const styles = {
  p: {
    fontFamily: 'MuseoSansRounded300',
    fontSize: 14,
    lineHeight: 22
  }
}

interface Props extends PropsWithChildren {
  style?: object
}

export default function P ({ children, style = {} }: Props): JSX.Element {
  return <Text style={{ ...styles.p, ...style }}>{children}</Text>
}
