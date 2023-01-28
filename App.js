import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Auth0Provider } from 'react-native-auth0';


import navigationTheme from './app/navigation/navigationTheme';
import TabNavigator from './app/navigation/TabNavigator';
import AuthContext from './app/components/AuthContext';


const Stack = createStackNavigator();

export default function App() {

  return (
    <Auth0Provider domain={AuthContext.domain} clientId={AuthContext.clientId}>
      <NavigationContainer theme={navigationTheme}>
        <TabNavigator />
      </NavigationContainer>
    </Auth0Provider>
  );
}




