import React from 'react'
import { View, Text } from 'react-native'

export default function Forecast(props){
    return (
        <View>
            <Text style={{color: 'white'}}>{props.main}</Text>
            <Text style={{color: 'white'}}>{props.description}</Text>
            <Text style={{color: 'white'}}>{props.temp}</Text>
            <Text style={{color: 'white'}}>°C</Text>
        </View>
    )
}