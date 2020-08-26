import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '5',
        description: '-',
        temp: 0
    })

    useEffect(()=>{
        console.log(`fetchingdatawithzipCode = ${props.zipCode}`)
        if(props.zipCode){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=74ac0b05b593e5f600199412fbb813aa`)
            .then((response)=>response.json())
            .then((json)=>{
                setForecastInfo({
                    main:json.weather[0].main,
                    description:json.weather[0].description,
                    temp:json.main.temp});})
            .catch((error)=>{
                console.warn(error);
            });
        }
    },[props.zipCode])

    
    return(
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.text}>Zip code</Text>
            <Text style={styles.text}>{props.zipCode}</Text>
            <Forecast {...forecastInfo} ></Forecast>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    text: {
        color: 'white'
    }
})