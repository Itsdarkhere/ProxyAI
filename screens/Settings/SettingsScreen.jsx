import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recording')}>
            <Text style={styles.text}>Navigate</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      width: '100%',
      backgroundColor: 'orange',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        
    }
})