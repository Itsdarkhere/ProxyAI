import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const TestComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
            <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Second')}>
            <Text>Second</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "500",
    backgroundColor: "red",
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    height: 75,
    width: 200,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})