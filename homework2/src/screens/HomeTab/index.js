import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { Images } from '../images'

const HomeTab = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#333333',
           
        }}>
            
            <Text style={{ fontSize:30, color: 'red' }}>HomeTab</Text>
        </View>
    )
}

export {HomeTab}