import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text style={styles.mainTxt}>{props.main} {props.temp}°C</Text>
            <Text style={styles.descriptionTxt}>{props.description}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    mainTxt: {
        fontSize: 25,
        margin: 10,
        justifyContent: "space-between",
    },
    descriptionTxt: {
        fontSize: 15,
        marginLeft: 20,
    },
})