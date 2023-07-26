import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Switch } from "react-native"

export const SettingWithPage = ({text, current}) => {
  const [on, setOn] = useState(false);
  const toggleOnOff = () => setOn((prevState) => !prevState);
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.innerContainer}>
            <Text style={styles.current}>{current}</Text>
            <View style={styles.iconBox}>
                <Text style={styles.icon}>X</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: 'white',
    borderTopWidth: 1,
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
  },
  innerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  iconBox: {

  },
  icon: {
    color: 'red',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  current: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  }
})
