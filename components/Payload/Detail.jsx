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
        color: 'white',
        fontWeight: '600'
    },
    value: {
        fontSize: 14,
        color: 'white',
        fontWeight: '400'
    }
})
