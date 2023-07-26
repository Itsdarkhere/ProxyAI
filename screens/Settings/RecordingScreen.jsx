import React from 'react'
import { StyleSheet, Text, View, ScrollView, ViewBase } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnOffOption } from '../../components/Settings/OnOffOption';
import { SettingWithPage } from '../../components/Settings/SettingWithPage';
import { CombinedSetting } from '../../components/Settings/CombinedSetting';

export const RecordingScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.text}>Request</Text>
        <CombinedSetting>
          <OnOffOption text={'Record Request Body'} withBR={false}/>
          <SettingWithPage text={'Maximum Size'} current={'1MB'} />
        </CombinedSetting>
        <View style={styles.gap}></View>
        <Text style={styles.text}>Response</Text>
        <CombinedSetting>
          <OnOffOption text={'Record Response Body'} withBR={false} />
          <SettingWithPage text={'Maximum Size'} current={'1MB'} />
        </CombinedSetting>
        <View style={styles.gap}></View>
        <OnOffOption text={'Only Record Partial Opaque Bodies'} withBR={true} />
        <Text style={styles.description}>Limits the size of recorded request and response bodies when the connecting is encrypted or otherwise opaque.</Text>
        <View style={styles.gap}></View>
        <OnOffOption text={'Record TCP Streams'}  withBR={true} />
        <Text style={styles.description}>Records TCP streams for non-HTTP traffic.</Text>
        <View style={styles.gap}></View>
        <CombinedSetting>
          <SettingWithPage text={'Include'} current={'0'} />
          <SettingWithPage text={'Exclude'} current={'0'} />
        </CombinedSetting>
        <Text style={styles.description}>
            You can choose which hostnames to be the only ones to include in the recording, 
            or Exclude hostnames that you want to ignore. Hostname matches may be exact or may use a wildcard.
        </Text>
        <View style={styles.supergap}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      height: '100%',
      width: '100%',
      backgroundColor: '#F3F3F3',
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    scrollView: {
        width: '100%',
        height: '100%',
    },
    gap: {
        height: 15,
    },
    supergap: {
        height: 50
    },
    text: {
        fontSize: 16,
        lineHeight: 34,
        paddingLeft: 10,
    },
    description: {
        paddingTop: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: '300'
    }
})
