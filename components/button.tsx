import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native'
import { styles as globals } from '../styles'

interface IButtonProps {
  children: string;
  onPress?: () => void
}

export const Button = (props: IButtonProps) => {
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => (
        <View style={[
          globals.mainColor,
          globals.borderRadius,
          { padding: 12 },
          pressed && { opacity: 0.6 }
        ]}>
          <Text style={styles.container}>{props.children}</Text>
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    color: '#ffffff',
    textAlign: 'center'
  }
})
