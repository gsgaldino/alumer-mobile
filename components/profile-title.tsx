import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProfileTitle { userName: string }

export function ProfileTitle(props: IProfileTitle) {
  const textStyle = StyleSheet.create({
    text: { textAlign: 'center', color: '#11323C' }
  })
  return (
    <View style={{ margin: 12 }}>
      <Text style={[textStyle.text]}>Bem-vindo(a),</Text>
      <Text style={[textStyle.text, { fontSize: 46 }]}>{props.userName}!</Text>
    </View>
  )
}
