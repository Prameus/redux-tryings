import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import { Navigation } from './Navigation'

const App = () => {
    return (
        <>
            <StatusBar
                backgroundColor={'transparent'}
                translucent />
            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        </>
    )
}

export { App }