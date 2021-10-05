import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeTab, MessageTab, NewsTab, ProfileTab, Splash, Login } from './screens'
import { Keyboard, View } from 'react-native'
import store, { KEYBOARD_OPEN, KEYBOARD_CLOSE } from './store'

const STACK1 = createStackNavigator()

const Navigation = () => {

    const [showSplash, SetSplash] = useState(true)

    useEffect(
        () => {
            Keyboard.addListener('keyboardDidHide', () => store.dispatch(KEYBOARD_CLOSE()))
            Keyboard.addListener('keyboardDidShow', d => store.dispatch(KEYBOARD_OPEN(d)))



            setTimeout(() => {
                SetSplash(false)
            }, 5000)
        }, []
    )

    return (
        <NavigationContainer>
            <STACK1.Navigator headerMode={'none'}>
                <STACK1.Screen
                    name={showSplash ? 'Splash' : 'HomeTab'}
                    component={showSplash ? Splash : HomeTab} />
            </STACK1.Navigator>
        </NavigationContainer>
    )
}

export { Navigation }