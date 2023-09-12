import React from 'react'
import { StyleSheet } from 'react-native'

import { Link } from 'expo-router'
import { Text, Pressable, View } from '@bacons/react-views'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Footer = (props: { active: boolean }) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <Pressable>
      {({ pressed }) => (
        <Link
          href="/register"
          style={[
            {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 70 + bottom,
              backgroundColor: "#ffffff",
              borderTopWidth: StyleSheet.hairlineWidth,
              display: props.active ? 'flex' : 'none',
              textAlign: 'center',
            },
            pressed && { opacity: 0.8 }
          ]}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flex: 1,
              position: 'relative'
            }}
          >
            <Text style={{ color: '#11323C' }}>Não tem uma conta?</Text>
            <Text style={{ color: '#11323C', fontWeight: 'bold' }}>
              Toque aqui para criar uma!
            </Text>
          </View>
        </Link>
      )}
    </Pressable>
  )
}
