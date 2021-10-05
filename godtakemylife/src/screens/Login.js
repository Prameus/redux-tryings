import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import { allColors } from '../theme'
import navigation from '@react-navigation/native'

const Login = () => {
    return (
        <>
            <View style={{
                backgroundColor: allColors.blue,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Entypo
                    name={'facebook-with-circle'}
                    size={70}
                    style={{ marginBottom: 100 }} />
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
                <Button
                    title='Log In'
                    type='solid'
                    buttonStyle={{
                        width: 330,
                    }}

                />

            </View>

            <View>
                <Button title='Sign In' type='clear' />
            </View>
        </>
    )
}

export { Login }