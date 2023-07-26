import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const ViewButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payload')}>
        <Text style={styles.text}>View as text</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '600',
    }
})