import React from 'react'
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const SecondScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTwo}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: 'grey',
      height: '100%',
      width: '100%',
    },
    containerTwo: {
        flex: 1,
    }
})