import { Pressable, StyleSheet, View, Text } from 'react-native'
import Colors from '../../constants/colors'
import Layout from '../../constants/layout'
import { useCallback } from 'react'

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: Layout.paddingMedium,
    alignSelf: 'stretch'
  },

  'primary-background': {
    backgroundColor: Colors.primaryBackgroundColor,
    borderColor: Colors.primaryBackgroundColor
  },

  'secondary-background': {
    backgroundColor: Colors.secondaryBackgroundColor,
    borderColor: Colors.secondaryBackgroundColor
  },

  'primary-text': {
    color: Colors.primaryColor
  },
  'secondary-text': {
    color: Colors.secondaryColor
  },

  text: {
    fontFamily: 'MuseoSansRounded700',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  outlined: {
    backgroundColor: 'transparent',
    borderColor: Colors.primaryBackgroundColor
  },

  disabled: {
    opacity: 0.5
  }
})

interface Props {
  onPress: () => void
  title: string
  mode?: 'primary' | 'secondary'
  outlined?: boolean
  disabled?: boolean
  style?: object
}

export default function StyledButton ({ onPress, title, mode = 'primary', outlined = false, disabled = false, style = {} }: Props): JSX.Element {
  const handlePress = useCallback(() => {
    if (!disabled) {
      onPress()
    }
  }, [onPress, disabled])

  return <Pressable onPress={handlePress} style={{
    ...styles.button,
    ...styles[`${mode}-background`],
    ...outlined ? styles.outlined : {},
    ...style
  }}>
            <View style={disabled ? styles.disabled : {}} >
                <Text style={{ ...styles.text, ...styles[`${mode}-text`] }}>{title.toUpperCase()}</Text>
            </View>
        </Pressable>
}
