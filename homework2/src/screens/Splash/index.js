import React from 'react'
import { View } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Splash = () => {
    return (
        <View
            style={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:'#333333'
            }}
        >

            <Fontisto
                name={'youtube-play'}
                color={'#FF0000'}
                size={162}

            />

        </View>
    )
}

export { Splash }