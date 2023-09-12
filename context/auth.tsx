import { useRouter, useSegments } from 'expo-router';
import React from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { IUser } from '../types'

const AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user) {
  const rootSegment = useSegments()[0];
  const router = useRouter();

  React.useEffect(() => {
    if (user === undefined) {
      return;
    }

    if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !user &&
        rootSegment !== "(auth)"
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && rootSegment !== "(app)") {
      // Redirect away from the sign-in page.
      router.replace("/");
    }
  }, [user, rootSegment]);
}

export function Provider(props) {
  const { getItem, setItem, removeItem } = useAsyncStorage("USER");
  const [user, setAuth] = React.useState(undefined);

  React.useEffect(() => {
    getItem().then((json) => {
      console.log("json", json);
      if (json != null) {
        setAuth(JSON.parse(json));
      } else {
        setAuth(null);
      }
    });
  }, []);

  useProtectedRoute(user);

  const userData: IUser = {
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    email: 'desenvolvedorgabs@gmail.com',
    firstname: 'Gabriel',
    lastname: 'Soares',
    nick: 'Gabs',
    role: 'CEO',
    artifacts: [{
      title: 'Paixão',
      description: 'foo',
      imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/000/284/988/small/a19.jpg'
    }],
    eventsCounter: {
      incredible: 2,
      pingucos: 7,
    },
    alumecas: {
      balance: 8,
      lastUpdateAt: 1694169422082
    },
    since: 1671148800000,
    team: '1234',
    badges: [
      {description: 'sócios', backgroundColor: '#49C0B6'},
      {description: 'liderança', backgroundColor: '#F15A22'},
      {description: 'adm', backgroundColor: '#FBFBFB'},
    ]
  }

  return (
      <AuthContext.Provider
          value={{
            signIn: () => {
              setAuth(userData);
              setItem(JSON.stringify({}));
            },
            signOut: () => {
              setAuth(null);
              removeItem();
            },
            user,
          }}
      >
        {props.children}
      </AuthContext.Provider>
  );
}