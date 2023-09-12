import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native'

interface AccordionProps {
  items: { question: string; answer: string }[]
}

export const Accordion = ({ items }: AccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const contentHeights: Animated.Value[] = []

  const toggleAccordion = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }

  const renderContent = (item: { question: string; answer: string }, index: number) => {
    const isExpanded = index === expandedIndex
    const contentHeight = isExpanded ? contentHeights[index] : 0

    return (
      <Animated.View
        key={index}
        style={[
          styles.content,
          {
            height: contentHeight,
            opacity: isExpanded ? 1 : 0,
            backgroundColor: '#125366',
            marginBottom: isExpanded ? 12 : 0
          },
        ]}>
        <Text style={{ color: '#ffffff', textAlign: 'center' }}>{item.answer}</Text>
      </Animated.View>
    )
  }

  return (
    <View>
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleAccordion(index)} style={styles.header}>
            <Text style={styles.question}>{item.question}</Text>
          </TouchableOpacity>
          {renderContent(item, index)}
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#11323C',
    padding: 16,
    borderRadius: 4,
  },
  question: {
    fontWeight: 'bold',
    color: '#ffffff'
  },
  content: {
    padding: 10,
  },
})
