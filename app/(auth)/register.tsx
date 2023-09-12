import { useState } from 'react'
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
// import * as ImagePicker from 'expo-image-picker'

import { useAppDispatch } from '../../hooks'

import { Button, Input, IInputProps } from '../../components'
import { styles as globals } from '../../styles'

import { saveUser } from '../../store/modules/user/slice'

export interface IRegisterPayload {
  firstname?: string
  lastname?: string
  nick?: string
  email?: string
  password?: string
  repeatPassword?: string
}

export default function Register() {
  const dispatch = useAppDispatch()
  // const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null)
  const [registerPayload, setRegisterPayload] = useState<IRegisterPayload>({
    email: '',
    firstname: '',
    lastname: '',
    nick: '',
    password: '',
    repeatPassword: '',
  })

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) setImage(result.assets[0]);
  // };

  // const uploadImage = async () => {
  //   if (image) {
  //     const apiUrl = 'YOUR_BACKEND_API_URL';
  //     const formData = new FormData();

  //     formData.append('image', {
  //       uri: image,
  //       type: 'image/jpeg',
  //       name: 'image.jpg',
  //     } as any);

  //     try {
  //       const response = await axios.post(apiUrl, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });

  //       console.log('Upload success:', response.data);
  //     } catch (error) {
  //       console.error('Upload error:', error);
  //     }
  //   } else {
  //     Alert.alert('No Image Selected', 'Please select an image before uploading.');
  //   }
  // };

  const callback = (data: unknown) => console.log('EXECUTED CALLBACK, DATA', data)

  const register = () => dispatch(saveUser({ payload: registerPayload, callback }))

  const onChange = (props: { key: string, value: string }) => {
    setRegisterPayload((old) => ({
      ...old,
      [props.key]: props.value
    }))
  }

  const registerFields = [
    { placeholder: 'Nome', name: 'firstname' },
    { placeholder: 'Sobrenome', name: 'lastname' },
    { placeholder: 'Nick (apelido)', name: 'nick' },
    { placeholder: 'E-mail', name: 'email' },
    { placeholder: 'Senha', name: 'password', securetextEntry: true },
    { placeholder: 'Repita sua senha', name: 'repeatPassword', securetextEntry: true },
  ]

  return (
    <View style={[
      styles.container,
      globals.mainBackgroundColor,
      { paddingTop: 12 }
    ]}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: 24 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {registerFields.map((field, index) => (
            <RegisterInput
              isLast={index + 1 === registerFields.length}
              placeholder={field.placeholder}
              value={registerPayload[field.name]}
              onChange={(event) => onChange({ key: field.name, value: event.target.value})}
              key={field.name}
              name={field.name}
              secureTextEntry={field.securetextEntry}
            />
          ))}

          {/* <Button onPress={pickImage}>Pick image</Button>
          {image && (
            <Image source={{ uri: image.uri }} style={{ width: 100, height: 100 }} />
          )} */}

          <Button onPress={register}>
            Registrar
          </Button>
        </KeyboardAvoidingView>
        <Image
          style={{
            width: 100,
            height: 100,
            marginVertical: 12
          }}
          source={require('../../assets/adaptive-icon.png')}
        />
      </ScrollView>
    </View>
  );
}

const RegisterInput = (props: { placeholder: string, isLast: boolean } & IInputProps) => {
  return (
    <Input
      style={{ marginBottom: props.isLast ? 24 : 12 }}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginBottom: {
    marginBottom: 12,
  }
})
