import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const ViewButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Rawscreen')}>
        <Text style={styles.text}>View as text</Text>
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
        borderTopColor: '#E1E1E1',
        borderTopWidth: 1,
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#E1E1E1',
        fontSize: 16,
        fontWeight: '600',
    }
})