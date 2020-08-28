import React from 'react'
import { FlatList, View, StatusBar, Text, StyleSheet, Button } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems=[
    {place:'หาดใหญ่',code:'90110'},
    {place:'ตรัง',code:'92000'},
    {place:'กระบี่',code:'81000'},
    {place:'ชุมพร',code:'86000'},
    {place:'นครศรีธรรมราช',code:'96000'},
    {place:'พังงา',code:'82000'},
    {place:'พัทลุง',code:'93000'},
    {place:'ภูเก็ต',code:'83000'},
    {place:'ยะลา',code:'95000'},
    {place:'ระนอง',code:'85000'},
    {place:'สุราษฎร์ธานี',code:'84000'},
    // {place:'',code:''},
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
        margin: 10,
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    }
})