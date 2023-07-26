import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/Settings/SettingsScreen';
import { RecordingScreen } from '../screens/Settings/RecordingScreen';
import { DNSScreen } from '../screens/Settings/DNSScreen';
import { SSLScreen } from '../screens/Settings/SSLScreen';
import { BlockScreen } from '../screens/Settings/BlockScreen';
import { AIScreen } from '../screens/Settings/AIScreen';

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
            <Stack.Screen
                name='DNS'
                component={DNSScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name='SSL'
                component={SSLScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name='Block'
                component={BlockScreen}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name='AI'
                component={AIScreen}
                options={{
                    headerShown: true,
                }}
            />
      </Stack.Navigator>
    )
}