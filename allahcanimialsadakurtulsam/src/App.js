import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

const App = () => {
    return (
        <View style={{
            backgroundColor: '#4267B2',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Facebook</Text>
            <TextInput style={{
                color: 'black',
                backgroundColor: 'white',
                width: '80%',
                height: 40,
                borderRadius: 2,
            }}
                placeholder='Enter Your E-mail pls' />
            <TextInput style={{
                color: 'black',
                backgroundColor: 'white',
                width: '80%',
                height: 40,
                borderRadius: 2,

            }}
                placeholder='Enter Your Password pls' />
            <Button />
        </View>
    )
}

export { App };