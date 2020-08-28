import React from 'react'
import { FlatList, View, StatusBar, Text, StyleSheet, Button } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const northZipItems=[
    {place:'เชียงใหม่',code:'50000'},
    {place:'เชียงราย',code:'57000'},
    {place:'ลำปาง',code:'52000'},
    {place:'ลำพูน',code:'51000'},
    {place:'แม่ฮ่องสอน',code:'58000'},
    {place:'น่าน',code:'55000'},
    {place:'พะเยา',code:'56000'},
    {place:'แพร่',code:'54000'},
    {place:'อุตรดิตถ์',code:'53000'},
]

const bkkZipItems=[
    {place:'บางบอน',code:'10150'},
    {place:'บางกะปิ',code:'10240'},
    {place:'บางแค',code:'10160'},
    {place:'บางเขน',code:'10220'},
    {place:'บางคอแหลม',code:'10120'},
]

const southZipItems=[
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

export default function ZipCodeScreen({route}){
    const navigation = useNavigation()
    var data
    var region = route.params.region
    if(region == "Bkk"){
        data = bkkZipItems
    }
    else if(region == "North"){
        data = northZipItems
    }
    else if(region == "South"){
        data = southZipItems
    }

    return(
        <View>
            <FlatList
                data = {data}
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