import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Switch } from "react-native"

export const CombinedSetting = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}
// Palette
// #000000
// #141414
// #1B1B1B
// #FFFFFF
// #F3F3F3
// #E1E1E1
const styles = StyleSheet.create({
  container: {
    fontWeight: "500",
    backgroundColor: "#1B1B1B",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  }
})
