import React from 'react'
import { ScrollView, Image } from 'react-native'
import { Link } from 'expo-router'
import { View, Text } from '@bacons/react-views'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfilePicture, Button } from '../../components'
import { useAuth } from '../../context/auth'
import { styles as globals } from '../../styles'
import { IBadge } from '../../types'

export default function Alumecas() {
  const { user } = useAuth()
  const insets = useSafeAreaInsets()
  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      contentContainerStyle={[
        {
          paddingVertical: 12,
          paddingHorizontal: Math.max(20, insets.left + insets.right),
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingBottom: Math.max(insets.bottom + 100)
        },
        globals.mainBackgroundColor,
      ]}
    >
      <Image
        style={{
          width: 100,
          height: 100,
          marginBottom: 12
        }}
        source={require('../../assets/adaptive-icon.png')}
      />
      <ProfilePicture uri={user?.avatarUrl} borderColor='#49C0B6' />
      <View
        style={{
          width: 300,
          height: 200,
          backgroundColor: '#11323C',
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 52,
          paddingBottom: 12,
          top: -40,
          zIndex: -1,
          borderRadius: 4
        }}
      >
        <Text
          style={{ color: '#ffffff' }}
        >
          {user?.nick}
        </Text>
        <Text
          style={{
            color: '#ffffff'
          }}
        >
          ({user?.firstname} {user?.lastname})
        </Text>
        <Text style={{
            color: '#ffffff'
          }}>{user?.role}
        </Text>
        <Badges badges={user?.badges || []} />
        <SinceOf startDateTimestamp={user?.since} />
      </View>
    </ScrollView>
  )
}

function Badges(props: { badges: IBadge[] }) {
  return (
    <View style={{
      flexDirection: 'row',
      gap: 20
    }}>
      {props.badges.map((badge) => <Badge key={badge.backgroundColor} badge={badge} />)}
    </View>
  )
}

function Badge(props: { badge: IBadge }) {
  return (
    <View style={{
      backgroundColor: props.badge.backgroundColor,
      paddingVertical: 2,
      paddingHorizontal: 4,
      borderRadius: 4
    }}>
      <Text>{props.badge.description.toUpperCase()}</Text>
    </View>
  )
}

function SinceOf(props: { startDateTimestamp: number }) {
  return (
    <Text style={{ color: '#ffffff' }}>
      Alumer desde {new Date(props.startDateTimestamp).toLocaleDateString()}
    </Text>
  )
}
