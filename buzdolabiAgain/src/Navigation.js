import React, { useState, useEffect } from 'react';
import { Keyboard, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from './screen/Splash'
import { HomeScreen } from './screen/HomeScreen';

import 'react-native-gesture-handler'

const STACK1 = createStackNavigator();

const Navigation = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(
        () => {
            setTimeout(() => {
                setShowSplash(false);
            }, 2000);
        },
        []
    );

    return (
        <NavigationContainer>
            <STACK1.Navigator
                headerMode={'none'}
            //screenOptions={}
            >
                <STACK1.Screen
                    name={showSplash ? 'Splash' : 'HomeScreen'}
                    component={showSplash ? Splash : HomeScreen}
                />
            </STACK1.Navigator>
        </NavigationContainer>
    );
};

export { Navigation };