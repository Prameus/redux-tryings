import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements'

const Library = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#333333'
        }}>
            
            <Text style={{ fontSize: 30, color: 'red' }}>Library</Text>
        </View>
    )
}

export { Library }