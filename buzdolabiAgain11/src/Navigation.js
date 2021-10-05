import React, { useState, useEffect } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './Screens/HomeScreen'
import { Splash } from './Screens/Splash'

const Stack1 = createStackNavigator()

const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(
        () => {
            setTimeout(() => {
                setShowSplash(false)
            }, 3000)
        }
    )

    return (
        <NavigationContainer>
            <Stack1.Navigator headerMode={'none'}>
                <Stack1.Screen
                    name={showSplash ? 'Splash' : 'homeScreen'}
                    component={showSplash ? Splash : HomeScreen}
                />

            </Stack1.Navigator>
        </NavigationContainer>
    )
}

export { Navigation }