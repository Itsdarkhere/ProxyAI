import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestScreen } from "../screens/TestScreen"
import React from 'react'
import { SecondScreen } from '../screens/SecondScreen';
import { SettingsStack } from './SettingsStack';

export const AppStack = () => {
    const Stack = createNativeStackNavigator();

    // Everything for a logged in user
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Test'
          component={TestScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Second'
          component={SecondScreen}
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
