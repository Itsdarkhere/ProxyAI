import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Settings</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AI')}>
                    <Text style={styles.text}>AI / Prompt</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recording')}>
                    <Text style={styles.text}>Recording</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SSL')}>
                    <Text style={styles.text}>SSL Proxying</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Block')}>
                    <Text style={styles.text}>Block List</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DNS')}>
                    <Text style={styles.text}>DNS Spoofing</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      paddingHorizontal: 10,
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 34,
    },
    row: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      gap: 10,
    },
    button: {
        flex: 1,
        height: 150,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        color: 'white'
    }
})
