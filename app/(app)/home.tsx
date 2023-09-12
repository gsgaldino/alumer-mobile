import React from 'react'
import { Image, ScrollView, Pressable } from 'react-native'
import { View, Text } from '@bacons/react-views'
import { styles } from '../../styles'

export default function Alumecas() {
  const menuItems = [
    { label: 'Artefatos', source: require('../../assets/home_artifacts.png') },
    { label: 'Alumecas', source: require('../../assets/home_alumecas.png') },
    { label: 'Agenda', source: require('../../assets/home_agenda.png') },
    { label: 'Benefícios', source: require('../../assets/home_benefits.png') },
    { label: 'Cubo', source: require('../../assets/home_cube.png') },
    { label: 'LGPD', source: require('../../assets/home_lgpd.png') },
    { label: 'Atração Digital', source: require('../../assets/home_digital_attraction.png') },
    { label: 'Educação & Inovação', source: require('../../assets/home_ede9.png') },
    { label: 'Engajamento', source: require('../../assets/home_engagement.png') },
    { label: 'Gente & Cultura', source: require('../../assets/home_people_and_culture.png') },
    { label: 'Adm', source: require('../../assets/home_adm.png') },
    { label: 'Pinguço', source: require('../../assets/home_pinguco.png') },
  ]

  return (
    <View style={[styles.mainBackgroundColor, { flex: 1, marginBottom: 40, paddingBottom: 34 }]}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image
          style={{ width: 100, height: 100, marginVertical: 12 }}
          source={require('../../assets/adaptive-icon.png')}
        />
        <Text style={{
          color: '#11323C',
          fontSize: 26,
          textAlign: 'center',
          marginBottom: 24
        }}>
          A educação do futuro, hoje!
        </Text>

        <View style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          {menuItems.map((item) => (
            <MenuItem key={item.label} source={item.source} label={item.label} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

function MenuItem(props: { label: string, source: any }) {
  return (
    <View style={{ width: 100, marginBottom: 24 }}>
      <Pressable>
        {({ pressed }) => (
          <View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, .1)'
              },
              pressed && { opacity: 0.8 }
            ]}
          >
            <Image source={props.source} />
          </View>
        )}
      </Pressable>
      <Text style={{ color: '#11323C', textAlign: 'center', marginTop: 4 }}>{props.label}</Text>
    </View>
  )
}
