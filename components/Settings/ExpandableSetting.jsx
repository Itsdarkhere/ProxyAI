import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Switch } from "react-native"

export const ExpandableSetting = ({text, current, withBR}) => {
  const borderRadius = withBR ? 8 : 0;
  const styles = StyleSheet.create({
    container: {
      borderTopColor: 'white',
      borderTopWidth: 1,
      fontWeight: "500",
      backgroundColor: "#1B1B1B",
      height: 75,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      gap: 10,    
      borderRadius: borderRadius
    },
    text: {
      fontSize: 16,
      fontWeight: '500',
      color: '#F3F3F3',
    },
    current: {
      fontSize: 14,
      fontWeight: '600',
      color: '#E1E1E1',
    }
  })

  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.current}>{current}</Text>
    </TouchableOpacity>
  )
}
