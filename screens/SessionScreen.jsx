import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Payload } from '../components/Session/Payload';

export const SessionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.sessionStuff}>
          <View style={styles.textBlock}>
            <Text style={styles.numberText}>0</Text>
            <Text style={styles.typeText}>Hosts</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.numberText}>0</Text>
            <Text style={styles.typeText}>Requests</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.numberText}>0 B</Text>
            <Text style={styles.typeText}>Size</Text>
          </View>
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

// Palette
// #000000
// #141414
// #1B1B1B
// #FFFFFF
// #F3F3F3
// #E1E1E1
const styles = StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: '#F3F3F3',
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
      height: 100,
      backgroundColor: '#141414',
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    currentSession: {
      color: '#F3F3F3',
      fontWeight: '500',
      fontSize: 16,
    },
    textBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 3,
    },
    typeText: {
      color: '#F3F3F3',
      fontWeight: '500',
      fontSize: 14,
    },
    numberText: {
      color: '#FFFFFF',
      fontWeight: '700',
      fontSize: 16,
    },
})