import React from 'react'
import { Navigation } from './Navigation';
import { View, StatusBar } from 'react-native'
import { Redux } from './Redux'

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'#666666AA'} />

            <View style={{ flex: 1 }}>
                <Redux />
            </View>
        </>
    )
}

export { App };