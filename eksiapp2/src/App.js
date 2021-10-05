import React, { useState, useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import { Splash } from '~screens'
import { Navigation } from '~/Navigation'

const App = () => {

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />

            <View
                style={{
                    flex: 1
                }}
            >
                <Navigation />
            </View>
        </>
    )

}

export { App }