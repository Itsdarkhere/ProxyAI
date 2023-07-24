import React from 'react'
import { StyleSheet, View } from "react-native"

export const TestComponent = () => {

  return (
    <View style={styles.container}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "500",
    backgroundColor: "red",
    height: 100,
  },
})