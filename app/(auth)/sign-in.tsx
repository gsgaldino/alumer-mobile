import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform
} from 'react-native'

import { useAuth } from '../../context/auth'
import { Button, Input, Link } from '../../components'
import { styles as globals } from '../../styles'
import { ScrollView } from 'react-native-gesture-handler';

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={[
      styles.container,
      globals.mainBackgroundColor,
      { paddingVertical: 12 }
    ]}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Text style={[{ textAlign: 'center' }, styles.marginBottom]}>alumer</Text>
        <Image
          source={require('../../assets/profile_icon.png')}
          style={{ marginBottom: 16 }}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={{ marginBottom: 8 }}>
            <Input placeholder='Nome do usuário' />
          </View>
          <View style={{ marginBottom: 24 }}>
            <Input placeholder='Senha' />
          </View>
          <Button onPress={signIn}>
            Entrar
          </Button>
        </KeyboardAvoidingView>
        <Link style={{ marginTop: 12 }} href="/forgot-password">Esqueci a minha senha</Link>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: 12,
  }
})
