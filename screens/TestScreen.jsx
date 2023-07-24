import React from 'react'
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TestComponent } from '../components/TestComponent';

export const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TestComponent />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
})