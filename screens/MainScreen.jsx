import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export const MainScreen = () => {
  const [on, setOn] = useState(false);
  const toggleOnOff = () => setOn((prevState) => !prevState);
  const navigation = useNavigation();

  const testProxy = () => {
    axios.post("https://proxy-ai-server.vercel.app/api/test", {})
    .then((res) => console.log(res.data))
    .catch((err) => {
      console.log("Err: ", err);
    })
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['right', 'left', 'top']}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.settingsText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.heading}>ProxyAI</Text>
        </View>
        <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.testButton} onPress={() => testProxy()}>
              <Text style={styles.text}>Test api</Text>
            </TouchableOpacity>
            <View  style={styles.sessionStuff}>
                <Text style={styles.headingTwo}>Status</Text>
                <View style={styles.button}>
                    <Text style={styles.text}>{on ? 'ON' : 'OFF'}</Text>
                    <Switch 
                        trackColor={{false: 'red', true: 'green'}}
                        thumbColor={on ? 'white' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleOnOff}
                        value={on}
                    />
                </View>
            </View>
            <View style={styles.sessionStuff}>
                <Text style={styles.headingTwo}>Current session</Text>
                <TouchableOpacity style={styles.session} onPress={() => navigation.navigate('Session')}>
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
                    <Image
                      source={require("../assets/arrow.png")}
                      style={styles.arrow}
                    />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
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
    safeArea: {
      position: 'relative',
      backgroundColor: 'black',
      flex: 1,
    },
    testButton: {
      height: 75,
      width: '100%',
      backgroundColor: '#1B1B1B',
      borderRadius: 8,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      fontWeight: "500",
      backgroundColor: "#000000",
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,    
    },
    topContainer: {
      height: 100, // Changed from 250 to '50%' to make it responsive
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingBottom: 10,
      paddingHorizontal: 15,
      position: 'relative'
    },
    bottomContainer: {
      backgroundColor: '#F3F3F3',
      width: '100%',
      flex: 1, // Changed from '100%' to '50%' to make it responsive
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      gap: 15,
      padding: 15,
    },
    settings: {
      position: 'absolute',
      top: 10,
      left: 15,
      borderRadius: '50%',
      backgroundColor: '#F3F3F3',
      height: 25,
      width: 25,
      display: 'flex',
      alignItems: 'center'
    },    
    settingsText: {
      color: '#F3F3F3',
    },
    heading: {
      color: 'white',
      fontWeight: "700",
      fontSize: 22,
    },
    sessionStuff: {
      width: '100%',
    },
    session: {
      width: '100%',
      height: 100,
      backgroundColor: '#1B1B1B',
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      position: 'relative',
      paddingRight: 50,
    },
    textBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 3,
    },
    headingTwo: {
      paddingBottom: 5,
      fontSize: 14,
      fontWeight: '400',
      color: '#1B1B1B'
    },
    button: {
      height: 75,
      width: '100%',
      backgroundColor: '#1B1B1B',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 15,
    },
    text: {
      color: 'white',
      fontWeight: '500',
      fontSize: 16,
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
    arrow: {
      height: 15,
      width: 22,
      position: 'absolute',
      right: 10,
      transform: [{ rotate: '90deg' }]
    }
})