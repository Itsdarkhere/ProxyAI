import React from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from "react-native";
import { OnOffOption } from '../../components/Settings/OnOffOption';
import { SettingWithPage } from '../../components/Settings/SettingWithPage';
import { CombinedSetting } from '../../components/Settings/CombinedSetting';

export const SSLScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <CombinedSetting>
            <OnOffOption text={'Enabled'} />
            <SettingWithPage text={'Include'} current={'16'} />
            <SettingWithPage text={'Exclude'} current={'0'} />
        </CombinedSetting>
        <Text style={styles.description}>
            Add host names to the include list to enable SSL proxying for those hosts.
        </Text>
        <Text style={styles.description}>
            The Exclude list excludes host names matched by the include list; 
            such as if you've used a wildcard in include and need to exclude specific host names matched by that wildcard.
        </Text>
        <Text style={styles.description}>
            You may need to force-close and re-open an app in order for its requests to be visible after changing SSL proxying settings.
        </Text>
        <Text style={styles.heading}>CA Certificate</Text>
        <View style={styles.certView}>
            <View style={styles.certViewView}>
                <Text style={styles.textOne}>Certificate Status</Text>
                <Text style={styles.textTwo}>Proxy not running</Text>
            </View>
            <TouchableOpacity style={styles.certButton}>
                <Text style={styles.textThree}>Install SSL Certificate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.certButton}>
                <Text style={styles.textFour}>Reset SSL Certificate</Text>    
            </TouchableOpacity>
        </View>
        <Text style={styles.description}>
            SSL proxying requires that you install and trust a CA certificate create by Charles for your device.
        </Text>
        <Text style={styles.description}>
            INSTRUCTIONS
        </Text>
        <Text style={styles.description}>
            Part one: install the certificate
        </Text>
        <Text style={styles.description}>
            1. Ensure Charles is active, using the switch on the main screen of Charles.
        </Text>
        <Text style={styles.description}>
            2. Tap "Install SSL Certificate" above
        </Text>
        <Text style={styles.description}>
            3. Safari prompts you to allow a configuration profile to be downloaded. Tap Allow.
        </Text>
        <Text style={styles.description}>
            4. If you have an Apple Watch you may be prompted to choose a device to download to; choose your IPhone or IPad.
        </Text>
        <Text style={styles.description}>
            5. Open the settings app, tap "Profile Downloaded" to access the new profile.
        </Text>
        <Text style={styles.description}>
            6. Tap install to start the installation process; read the warning, then tap install again.
        </Text>
        <Text style={styles.description}>
            Part two: Trust the certificate
        </Text>
        <Text style={styles.description}>
            1. Open Settings app
        </Text>
        <Text style={styles.description}>
            2: Navigate to General {'>'} About {'>'} Certificate Trust Settings
        </Text>
        <Text style={styles.description}>
            3: Find the certificate "Charles Proxy CA (2 Jan 2023, IPhone)" and switch it on.
        </Text>
        <Text style={styles.description}>
            4: Read the warning, then tap Continue.
        </Text>
        <Text style={styles.description}>
            Finally, return to Charles and check the Certificate Status above. When the certificate is correctly installed and trusted, it will read "Trusted".
        </Text>
        <View style={styles.supergap}></View>
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
    certView: {
        borderRadius: 8,
        backgroundColor: '#141414',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    certViewView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 75,
    },
    textOne: {
        fontSize: 16,
        color: '#F3F3F3',
        fontWeight: '600'
    },
    textTwo: {
        fontSize: 14,
        color: '#E1E1E1',
        fontWeight: '500'
    },
    textThree: {
        fontSize: 14,
        color: 'green',
        fontWeight: '600',
    },
    textFour: {
        fontSize: 14,
        color: 'red',
        fontWeight: '600',
    },
    heading: {
        fontSize: 16,
        lineHeight: 34,
        paddingLeft: 10,
    },
    description: {
        paddingTop: 5,
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: '300'
    },
    certButton: {
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: '#E1E1E1',
        borderTopWidth: 0.5,
    },
    supergap: {
        height: 50,
    }
})