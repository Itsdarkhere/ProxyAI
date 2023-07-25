import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Switch } from "react-native"
import { useNavigation } from '@react-navigation/native'

export const TestComponent = () => {
  const navigation = useNavigation();
  const [on, setOn] = useState(false);
  const toggleOnOff = () => setOn((prevState) => !prevState);
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.settingsText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.heading}>ProxyAI</Text>
        </View>
        <View style={styles.bottomContainer}>
            <View  style={styles.sessionStuff}>
                <Text style={styles.currentSession}>Status</Text>
                <View style={styles.button}>
                    <Text style={styles.text}>{on ? 'ON' : 'OFF'}</Text>
                    <Switch 
                        trackColor={{false: 'red', true: 'white'}}
                        thumbColor={on ? '#767577' : 'white'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleOnOff}
                        value={on}
                    />
                </View>
            </View>
            <View style={styles.sessionStuff}>
                <Text style={styles.currentSession}>Current session</Text>
                <TouchableOpacity style={styles.session} onPress={() => navigation.navigate('Second')}>
                    <Text style={styles.text}>Second</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "500",
    backgroundColor: "black",
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
  settings: {
    position: 'absolute',
    top: 0,
    left: 15,
    borderRadius: '50%',
    backgroundColor: 'white',
    height: 25,
    width: 25,
    display: 'flex',
    alignItems: 'center'
  },    
  settingsText: {
    color: 'white',
  },
  heading: {
    color: 'white',
    fontWeight: "700",
    fontSize: 22,
  },
  bottomContainer: {
    backgroundColor: 'white',
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
  sessionStuff: {
    width: '100%',
  },
  session: {
    width: '100%',
    height: 125,
    backgroundColor: '#D2D2D2',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentSession: {
    paddingBottom: 5,
    fontSize: 14,
    fontWeight: '300',
  },
  button: {
    height: 75,
    width: '100%',
    backgroundColor: '#D2D2D2',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  }
})
