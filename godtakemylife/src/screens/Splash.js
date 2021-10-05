import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const Splash = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#4785E8' }}>
            <LottieView
                source={require('../assets/images/19902-splash-screen.json')}
                autoPlay
                loop={false}
            />
        </View>
    )
}

export { Splash }
