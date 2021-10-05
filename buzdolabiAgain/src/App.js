import React from 'react'
import { View, Text } from 'react-native'

import 'react-native-gesture-handler'

import { Navigation } from './Navigation'
import { HomeScreen } from './screen/HomeScreen'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Navigation />
        </View>
    )
}

export { App }