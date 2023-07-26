import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Switch } from "react-native"

export const CombinedSetting = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "500",
    backgroundColor: "black",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  }
})
