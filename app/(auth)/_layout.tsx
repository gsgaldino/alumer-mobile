import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Stack, useSegments } from 'expo-router'
import { Footer } from '../../components'

export default function AuthLayout() {
  const path = useSegments()[1]
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#49C0B6',
          }
        }}
      >
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="forgot-password"
          options={{
            presentation: 'modal',
            title: 'Esqueci minha senha'
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            presentation: 'modal',
            title: 'Registrar'
          }}
        />
      </Stack>
      <Footer active />
    </>
  )
}
