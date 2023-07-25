import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/Settings/SettingsScreen';
import { RecordingScreen } from '../screens/Settings/RecordingScreen';

export const SettingsStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SettingsDefault'
                component={SettingsScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Recording'
                component={RecordingScreen}
                options={{
                    headerShown: true,
                }}
            />
      </Stack.Navigator>
    )
}