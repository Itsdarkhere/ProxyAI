import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TestScreen } from "../screens/TestScreen"
import React from 'react'

export const AppStack = () => {
    const Stack = createNativeStackNavigator();

    // Everything for a logged out user
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Test'
          component={TestScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
}