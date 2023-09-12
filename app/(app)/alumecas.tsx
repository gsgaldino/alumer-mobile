import React from 'react'
import { ScrollView, Image } from 'react-native'
import { Link } from 'expo-router'
import { View, Text } from '@bacons/react-views'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ProfilePicture, Button } from '../../components'
import { useAuth } from '../../context/auth'
import { styles as globals } from '../../styles'

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
          paddingTop: 70,
          top: -40,
          zIndex: -1,
          borderRadius: 4
        }}
      >
        <Text
          style={{
            color: '#ffffff'
          }}
        >
          Olá, {user?.nick}
        </Text>
        <Image
          style={{ marginVertical: 12 }}
          source={require('../../assets/alumecas_light.png')}
        />
        <Text style={{ color: '#ffffff' }}>Sua carteira de Alumecas tem o total de:</Text>
        <View style={{
          backgroundColor: '#125366',
          width: '100%',
          padding: 20,
          marginTop: 12
        }}>
          <Text
            style={{
              color: '#ffffff',
              textAlign: 'center'
            }}
          >
            {user?.alumecas?.balance} Alumecas
          </Text>
        </View>
      </View>
      <Text style={{ marginTop: 4 }}>
        Última atualização: {new Date(user?.alumecas?.lastUpdateAt).toLocaleDateString()}
      </Text>

      <View style={{
        flexDirection: 'column',
        marginVertical: 24,
      }}>
        <Button>Participar do sorteio</Button>
        <Link style={{ marginTop: 14 }} href="/">Cadastrar mais alumecas</Link>
      </View>
    </ScrollView>
  )
}
