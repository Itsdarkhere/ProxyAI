import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"

export const Detail = ({what, value}) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.what}>{what}</Text>
        <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
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
    button: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    what: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '600'
    },
    value: {
        fontSize: 14,
        color: '#F3F3F3',
        fontWeight: '400'
    }
})
