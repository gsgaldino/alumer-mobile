import { Slot } from 'expo-router';

import { Provider as AuthProvider } from '../context/auth';
import { Provider } from 'react-redux'
import { store } from '../store'

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </Provider>
  );
}