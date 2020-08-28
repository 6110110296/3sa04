import React from 'react'
import { FlatList, View, StatusBar, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableRegionItems=[
    {region:'North'},
    {region:'Bkk'},
    {region:'South'},
    // {place:'',code:''},
]

const RegionItem = ({region, navigation}) => (
    <TouchableHighlight>
        <View style={styles.zipItem}>
            <Button
                    title={region}
                    onPress={() => {
                        navigation.navigate('Province', {region: region})
                    }}
            />
        </View>
    </TouchableHighlight>
)

export default function RegionScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Image source={require('../sun.png')} style={styles.img}/>
            <FlatList
                data = {availableRegionItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <RegionItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        margin: 10,
    },
    img: {
        width: '60%',
        height: '25%'
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
})