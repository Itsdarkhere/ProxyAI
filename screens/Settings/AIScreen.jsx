import React from 'react'
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const AIScreen = () => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
})