import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <View style={styles.container}>
                <Image style={styles.img} source={props.img}/>
            </View>
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
    img: {
        width: '50%',
        height: '63%',
    },
    container: {
        alignItems: 'center',
    },
})