import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Payload } from '../components/Session/Payload';

export const SessionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.sessionStuff}>
            <Text style={styles.currentSession}>Current session</Text>
        </View>
        <ScrollView style={styles.scrollView}>
            <Payload />
            <Payload />
            <Payload />
            <Payload />
            <Payload />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      paddingHorizontal: 10,    
      paddingTop: 20,
      gap: 20,
    },
    scrollView: {
      overflow: 'hidden',
      borderRadius: 8,
      flex: 1,
    },
    sessionStuff: {
        width: '100%',
        height: 125,
        backgroundColor: '#D2D2D2',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentSession: {
      color: 'black',
      fontWeight: '500',
      fontSize: 16,
    },
})