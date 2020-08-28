import React from 'react'
import { FlatList, View, StatusBar, Text, StyleSheet, Button } from 'react-native'
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
        <View>
            <FlatList
                data = {availableRegionItems}
                keyExtractor = {item => item.code}
                renderItem = {({item}) => <RegionItem {...item} navigation={navigation}/>}
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
})