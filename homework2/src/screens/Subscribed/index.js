import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'

const Subscribed = () => {
    return (

        <View style={{
            flex: 1,
            backgroundColor: '#333333'
        }}>
            
            <Text style={{ fontSize: 30, color: 'red' }}>Subscribed</Text>
        </View>
    )
}

export { Subscribed }