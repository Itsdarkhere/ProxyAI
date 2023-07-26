import React from 'react'
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { OnOffOption } from '../../components/Settings/OnOffOption';
import { ExpandableSetting } from '../../components/Settings/ExpandableSetting';

export const BlockScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <OnOffOption text={'Enabled'} withBR={true} />
      <View style={styles.gap}></View>
      <ExpandableSetting text={'Blocking action'} current={'Drop connection'} withBR={true} />
      <Text style={styles.text}>BLOCK MATCHES</Text>
      <View style={styles.bm}>
        <Text style={styles.emptyText}>No block matches added</Text>
      </View>
    </ScrollView>
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
      height: '100%',
      width: '100%',
      backgroundColor: '#F3F3F3',
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    gap: {
        height: 5,
    },
    text: {
        fontSize: 16,
        lineHeight: 34,
        paddingLeft: 10,
        paddingTop: 5,
        fontWeight: '500',
        color: '#1B1B1B'
    },
    bm: {
        backgroundColor: '#141414',
        borderRadius: 8,
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    emptyText: {
        fontSize: 14,
        color: '#F3F3F3',
        fontWeight: '600'
    }
})