import type {
  StyleProp,
  TextStyle,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native'
import React from 'react'
import { TextInput, StyleSheet, Text } from 'react-native'

export interface IInputProps extends TextInputProps {
  placeholder?: string
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  value?: string
  label?: string
  style?: StyleProp<TextStyle>
  name?: string
}

export const Input = ({
  style,
  placeholder,
  value,
  onChange,
  label,
  ...rest
}: IInputProps) => {
  return (
    <>
      {label && <Text style={{ marginBottom: 4 }}>{label}</Text>}
      <TextInput
        style={[style, styles.container]}
        placeholder={placeholder}
        placeholderTextColor="#C4C4C4"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#C4C4C4',
    borderWidth: 1,
    color: '#000000',
    borderRadius: 4,
    padding: 12,
    minWidth: 260,
  }
})
