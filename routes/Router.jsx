import React from 'react'
import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Router = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFF"
    }
  })

  {/* If here if you want to toggle between auth and appStack */}
  return (
    <NavigationContainer>
      <SafeAreaProvider style={styles.container}>
        <AppStack />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}