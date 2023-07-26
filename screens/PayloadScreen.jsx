import React from 'react'
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Detail } from '../components/Payload/Detail';
import { ViewButton } from '../components/Payload/ViewButton';

export const PayloadScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.text}>OVERVIEW</Text>
        <View style={styles.block}>
            <Detail what="URL" value="bdhbshbfdhasbdfbhbsjhfbash" />
            <Detail what="Method" value="POST" />
            <Detail what="Response Code" value="200 OK" />
            <Detail what="Protocol" value="HTTP/1.1" />
            <Detail what="Kept Alive" value="No" />
            <Detail what="TLS" value="TSLS S DFDJFNN DHFDUFDjsdfjn" />
            <Detail what="Remote Address" value="api.yandex.plus.ru/fhfh" />
            <Detail what="Notes" value="-" />
            <Detail what="Error" value="-" />
        </View>
        <Text style={styles.text}>SIZES</Text>
        <View style={styles.block}>
            <Detail what="Request Header" value="724 B" />
            <Detail what="Request" value="484 B" />
            <Detail what="Response Header" value="559 B" />
            <Detail what="Response" value="99 B" />
        </View>
        <Text style={styles.text}>TIMES</Text>
        <Text style={styles.text}>REQUEST HEADER</Text>
        <View style={styles.block}>
            <Detail what="Host" value="POST" />
            <Detail what="Accept" value="POST" />
            <Detail what="apollographql-client-version" value="POST" />
            <Detail what="Accept-Language" value="POST" />
            <Detail what="Accept-Encoding" value="POST" />
            <Detail what="Content-Type" value="POST" />
            <Detail what="X-Request-ID" value="POST" />
            <Detail what="DeviceId" value="POST" />
            <Detail what="User-Agent" value="POST" />
            <Detail what="Content-Length" value="POST" />
            <Detail what="apollographql-client-name" value="POST" />
            <Detail what="X-APOLLO-OPERATION-TYPE" value="POST" />
            <Detail what="Connection" value="POST" />
            <Detail what="Cookie" value="POST" />
            <Detail what="X-APOLLO-OPERATION-NAME" value="POST" />
            <ViewButton />
        </View>
        <Text style={styles.text}>RESPONSE HEADER</Text>
        <View style={styles.block}>
            <Detail what="Cache-Control" value="POST" />
            <Detail what="Content-Type" value="POST" />
            <Detail what="Date" value="POST" />
            <Detail what="Expires" value="POST" />
            <Detail what="Pragma" value="POST" />
            <Detail what="Set-Cookie" value="POST" />
            <Detail what="Transfer-Encoding" value="POST" />
            <Detail what="Vary" value="POST" />
            <Detail what="X-Content-Type-Options" value="POST" />
            <Detail what="X-Frame-Options" value="POST" />
            <Detail what="X-XSS-Protection" value="POST" />
            <Detail what="x-request-id" value="POST" />
            <ViewButton />
        </View>
        <Text style={styles.text}>REQUEST BODY</Text>
        <View style={styles.block}>
            <ViewButton />
        </View>
        <Text style={styles.text}>RESPONSE BODY</Text>
        <View style={styles.block}>
            <ViewButton />
        </View>
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
      backgroundColor: '#F3F3F3',
      height: '100%',
      width: '100%',
      paddingHorizontal: 10,    
      paddingTop: 20,
      gap: 20,
    },
    block: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: '#141414'
    },
    text: {
        fontSize: 16,
        lineHeight: 34,
        paddingLeft: 5,
        fontWeight: '600',
        color: '#000000'
    },
    supergap: {
        height: 50,
    }
})