import {
  Platform,
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native'

import { Link, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useAuth } from '../../context/auth'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { store } from '../../store'
import { Provider } from 'react-redux'

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function AppLayout() {

  return (
    <Provider store={store}>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerRight: SignOutButton,
          headerStyle: {
            backgroundColor: '#49C0B6',
          }
        }}
      >
        <Stack.Screen
            name="index"
            options={{
              title: "alumer",
              headerLargeTitle: true,
            }}
        />
        <Stack.Screen
            name="alumecas"
            options={{
              headerRight: Platform.select({
                ios: DismissComposeButton,
              }),
            }}
        />
        <Stack.Screen
            name="home"
            options={{
              headerRight: Platform.select({
                ios: DismissComposeButton,
              }),
            }}
        />
        <Stack.Screen
            name="faq"
            options={{
              headerRight: Platform.select({
                ios: DismissComposeButton,
              }),
            }}
        />
        <Stack.Screen
            name="profile"
            options={{
              headerLargeTitle: true,
            }}
        />
      </Stack>
      <Footer />
    </Provider>
  );
}

function Footer() {
  const { bottom, left } = useSafeAreaInsets()
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 74 + bottom,
        paddingBottom: bottom,
        paddingLeft: Math.max(8, left),
        paddingHorizontal: 8,
        backgroundColor: "white",
        borderTopColor: "#ccc",
        borderTopWidth: StyleSheet.hairlineWidth,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
      }}
    >
      <Link href="/home">
        <Image source={require('../../assets/menu_home.png')} />
      </Link>
      <Link href="/faq">
        <Image source={require('../../assets/menu_search.png')} />
      </Link>
      <Link href="/alumecas">
        <Image source={require('../../assets/menu_alumecas.png')} />
      </Link>
      <Link href="/profile">
        <Image source={require('../../assets/menu_profile.png')} />
      </Link>
    </View>
  )
}

function SignOutButton() {
  const { signOut } = useAuth();

  return (
      <Link
          href="/"
          onPress={(ev) => {
            ev.preventDefault();
            signOut();
          }}
          asChild
      >
        <Pressable
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              paddingRight: 8,
            }}
        >
          <Text
              style={{
                fontWeight: "normal",
                paddingHorizontal: 8,
                fontSize: 16,
              }}
          >
            sair
          </Text>
          <FontAwesome name="sign-out" size={24} color="black" />
        </Pressable>
      </Link>
  );
}

function DismissComposeButton() {
  return (
      <Link href="..">
        <Text
            style={{
              fontWeight: "normal",
              paddingHorizontal: 8,
              fontSize: 16,
            }}
        >
          Back
        </Text>
      </Link>
  );
}