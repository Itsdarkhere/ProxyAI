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
      backgroundColor: '#F3F3F3',
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 34,
        paddingTop: 5,
        paddingLeft: 10,
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