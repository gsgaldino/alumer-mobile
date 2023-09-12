import React from 'react'
import { Image } from 'react-native'

interface IProfilePictureProps { uri: string, borderColor?: string }

export function ProfilePicture(props: IProfilePictureProps) {
  return (
    <Image
      style={{
        width: 166,
        height: 166,
        borderRadius: 200,
        borderWidth: 4,
        borderColor: props.borderColor || '#11323C',
      }}
      source={{ uri: props.uri }}
    />
  )
}