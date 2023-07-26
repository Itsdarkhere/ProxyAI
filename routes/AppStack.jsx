import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from "../screens/MainScreen"
import React from 'react'
import { SessionScreen } from '../screens/SessionScreen';
import { SettingsStack } from './SettingsStack';
import { PayloadScreen } from '../screens/PayloadScreen';

export const AppStack = () => {
    const Stack = createNativeStackNavigator();

    // Everything for a logged in user
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Test'
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Session'
          component={SessionScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen 
          name="Payload"
          component={PayloadScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    )
}
