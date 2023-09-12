import type { PropsWithChildren } from 'react'
import type { StyleProp, TextStyle } from 'react-native'

import React from 'react'
import { Link as ExpoLink } from 'expo-router'

interface ILinkProps extends PropsWithChildren {
  href: string
  style?: StyleProp<TextStyle>
}

export const Link = (props: ILinkProps) => {
  return (
    <ExpoLink
      href={props.href}
      style={[props.style, {
        textDecorationLine: 'underline',
        color: '#11323C',
      }]}
    >
      {props.children}
    </ExpoLink>
  )
}
