import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const SettingsScreen = () => {
    const navigation = useNavigation();

    // Palette
    // #000000
    // #141414
    // #1B1B1B
    // #FFFFFF
    // #F3F3F3
    // #E1E1E1

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Settings</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AI')}>
                    <Text style={styles.text}>AI Settings</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F3F3F3',
      paddingHorizontal: 10,
      paddingTop: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 34,
        color: '#000000'
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
        backgroundColor: '#1B1B1B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        color: '#F3F3F3',
        fontWeight: '500'
    }
})
