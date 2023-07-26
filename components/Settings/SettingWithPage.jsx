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
    borderTopColor: '#E1E1E1',
    borderTopWidth: 0.5,
    fontWeight: "500",
    backgroundColor: "#1B1B1B",
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
    fontSize: 16,
    fontWeight: '500',
    color: '#F3F3F3',
  },
  current: {
    fontSize: 12,
    fontWeight: '600',
    color: '#E1E1E1',
  }
})
