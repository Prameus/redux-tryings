import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'

const Notification = () => {
    return (

        <View style={{
            flex: 1,
            backgroundColor: '#333333'
        }}>
            <Text style={{ fontSize: 30, color: 'red' }}>Notification</Text>
        </View>
    )
}

export { Notification }