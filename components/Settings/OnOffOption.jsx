import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Switch } from "react-native"

export const OnOffOption = ({text, withBR}) => {
  const [on, setOn] = useState(false);
  const toggleOnOff = () => setOn((prevState) => !prevState);
  const borderRadius = withBR ? 8 : 0;

  const styles = StyleSheet.create({
    container: {
      fontWeight: "500",
      backgroundColor: "black",
      height: 75,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      gap: 10,    
      borderRadius: borderRadius,
    },
    text: {
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
    }
  })

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Switch 
            trackColor={{false: 'red', true: 'green'}}
            thumbColor={on ? 'white' : 'white'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleOnOff}
            value={on}
        />
    </View>
  )
}
