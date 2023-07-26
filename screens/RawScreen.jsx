import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { Payload } from '../components/Session/Payload';

export const RawScreen = () => {
  return (
    <View style={styles.container}> 
        <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      paddingHorizontal: 10,    
      paddingTop: 20,
    },
    text: {

    }
})