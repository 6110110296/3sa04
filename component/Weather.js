import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '5',
        description: '-',
        temp: 0,
        img: require('../image/logo.png'),
    })
    
    
    useEffect(()=>{
        console.log(`fetchingdatawithzipCode = ${props.zipCode}`)
        if(props.zipCode){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=74ac0b05b593e5f600199412fbb813aa`)
            .then((response)=>response.json())
            .then((json)=>{
                const main = json.weather[0].main
                const description = json.weather[0].description
                const temp = json.main.temp
                
                var imgSouce
                if(main == "Clouds"){
                    imgSouce = require('../image/clouds.png')
                }
                else if(main == "Rain"){
                    imgSouce = require('../image/rain.png')
                }
                else{
                    imgSouce = require('../image/logo.png')
                }
                setForecastInfo({
                    main:main,
                    description:description,
                    temp:temp,
                    img: imgSouce});}
            )
            .catch((error)=>{
                console.warn(error);
            });
        }
    },[props.zipCode])

    
    return(
        <ImageBackground source={require('../image/bg.jpg')} style={styles.backdrop}>
            <Text style={styles.zipTxt}>ZipCode {props.zipCode}</Text>
            <Forecast style={styles.zipTxt} {...forecastInfo} ></Forecast>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipTxt: {
        fontSize: 30,
        margin: 10,
    },
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
})