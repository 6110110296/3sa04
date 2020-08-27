import React from 'react'
import { FlatList, View, StatusBar, Text, StyleSheet, Button } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems=[
    {place:'Hatyai',code:'90110'},
    {place:'Trang',code:'92000'},
    {place:'Chiangmai',code:'50000'},
    {place:'Khonkaen',code:'40000'},
    {place:'Chonburi',code:'20000'},
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight>
        <View style={styles.zipItem}>
            <Button
                    title={place + ", " + code}
                    onPress={() => {
                        navigation.navigate('Weather', {zipCode: code})
                    }}
            />
        </View>
        
            
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View>
            <FlatList
                data = {availableZipItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,  
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})