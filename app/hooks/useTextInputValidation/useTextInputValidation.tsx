import { useState, useCallback } from 'react'

function useTextInputValidation (validate: (text: string) => boolean): { value: string, hasHadFocus: boolean, isValid: boolean, attributes: { onFocus: () => void, onChangeText: (text: string) => void } } {
  const [hasHadFocus, setHasHadFocus] = useState(false)
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleFocus = useCallback(() => {
    setHasHadFocus(true)
  }, [setHasHadFocus])

  const handleChange = useCallback((text: string) => {
    setIsValid(hasHadFocus && validate(text))
    setValue(text)
  }, [setIsValid, validate])

  return {
    value,
    isValid,
    hasHadFocus,
    attributes: {
      onFocus: handleFocus,
      onChangeText: handleChange
    }
  }
}

export default useTextInputValidation
