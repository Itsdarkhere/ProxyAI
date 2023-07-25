import React from 'react'
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const RecordingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      width: '100%',
      backgroundColor: 'green',
    },
})