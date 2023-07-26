import React from 'react'
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { OnOffOption } from '../../components/Settings/OnOffOption';

export const DNSScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <OnOffOption withBR={true} text={'Enabled'} />
      <Text style={styles.text}>BLOCK MATCHES</Text>
      <View style={styles.bm}>
        <Text style={styles.emptyText}>No mappings added</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 34,
        paddingLeft: 10,
        fontWeight: '600',
        color: 'black'
    },
    bm: {
        backgroundColor: 'black',
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
        color: 'grey',
        fontWeight: '600'
    }
})