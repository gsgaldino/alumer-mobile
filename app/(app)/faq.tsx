import React from 'react'
import { Image, ScrollView } from 'react-native'
import { View, Text } from '@bacons/react-views'
import { useAuth } from '../../context/auth'
import { Accordion, Input } from '../../components'
import { styles as globals } from '../../styles'

export default function Alumecas() {
  const faq: Array<{ question: string, answer: string }> = [
    {
      question: 'Por que o nome Alumia?',
      answer: 'O nome Alumia vem do verbo “alumiar” O mesmo que: iluminar, reluzir, acender, resplandecer, brilhar. É trazer conhecimento!'
    },
    {
      question: 'O que são Leads?',
      answer: 'O nome Alumia vem do verbo “alumiar” O mesmo que: iluminar, reluzir, acender, resplandecer, brilhar. É trazer conhecimento!'
    },
    {
      question: 'Como ganho Alumecas?',
      answer: 'O nome Alumia vem do verbo “alumiar” O mesmo que: iluminar, reluzir, acender, resplandecer, brilhar. É trazer conhecimento!'
    },
    {
      question: 'Quem são os sócios Alumia?',
      answer: 'O nome Alumia vem do verbo “alumiar” O mesmo que: iluminar, reluzir, acender, resplandecer, brilhar. É trazer conhecimento!'
    },
    {
      question: 'O que é uma IES?',
      answer: 'O nome Alumia vem do verbo “alumiar” O mesmo que: iluminar, reluzir, acender, resplandecer, brilhar. É trazer conhecimento!'
    },
    {
      question: 'Quantas IES a Alumia tem?',
      answer: 'O nome Alumia vem do verbo “alumiar” O mesmo que: iluminar, reluzir, acender, resplandecer, brilhar. É trazer conhecimento!'
    }
  ]

  return (
    <View style={[globals.mainBackgroundColor, { flex: 1, marginBottom: 60, paddingBottom: 34 }]}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 12 }}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={require('../../assets/adaptive-icon.png')}
        />
        <Text style={{
          color: '#11323C',
          fontSize: 26,
          textAlign: 'center',
          marginBottom: 24,
          fontWeight: 'bold'
        }}>FAQ</Text>
        <Accordion items={faq} />
        <Input placeholder="Escreva aqui sua pergunta" label="Não encontrou o que procurava?" />
      </ScrollView>
    </View>
  )
}
