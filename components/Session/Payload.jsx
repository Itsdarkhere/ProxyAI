import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const Payload = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payload')}>
        <View style={styles.leftView}>
            <Text style={styles.img}>X</Text>
            <Text style={styles.textOne}>https://abs.twimg.com</Text>
        </View>
        <View style={styles.rightView}>
            <Text style={styles.textTwo}>1</Text>
            <Text style={styles.icon}>Y</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 45,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    leftView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    rightView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    img: {
        fontSize: 16,
        color: 'red',
    },
    textOne: {
        fontSize: 14,
        color: 'white',
        fontWeight: '500',
    },
    textTwo: {
        fontSize: 14,
        color: 'white',
        fontWeight: '500',
    },
    icon: {
        fontSize: 14,
        color: 'green'
    }
  })
