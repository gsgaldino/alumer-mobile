import { View } from '@bacons/react-views'
import React from 'react'
import { Link } from 'expo-router'
import {
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfilePicture, ProfileTitle, Button } from '../../components'
import { useAuth } from '../../context/auth'
import { styles as globals } from '../../styles'

export default function App() {
  const { user } = useAuth()
  const insets = useSafeAreaInsets()

  if (!user) {
    return (
      <View style={[
        globals.mainBackgroundColor,
        { flex: 1, justifyContent: 'center', alignItems: 'center' }
      ]}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View
      style={[
        globals.mainBackgroundColor,
        {
          flex: 1,
          marginBottom:60,
          paddingBottom: 34
        }
      ]}
    >
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        contentContainerStyle={[
          {
            paddingVertical: 20,
            paddingHorizontal: Math.max(20, insets.left + insets.right),
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          },
          globals.mainBackgroundColor,
        ]}
      >
        <ProfilePicture uri={user?.avatarUrl} />
        <ProfileTitle userName={user?.nick} />

        <Image
          style={{width: 100, height: 100, marginBottom: 12 }}
          source={require('../../assets/adaptive-icon.png')}
        />

        <Button>Sou novo por aqui</Button>
        <Link
          href="/home"
          style={{
            color: '#11323C',
            textDecorationLine: 'underline',
            marginVertical: 14
          }}
        >
          Pular tutorial
        </Link>
      </ScrollView>
    </View>
  )
}
