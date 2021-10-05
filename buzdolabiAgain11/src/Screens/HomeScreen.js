import React from 'react'
import { Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { TabScreen } from './TabScreen'
import { SettingsScreen } from './SettingsScreen'
import { Recipes } from './Recipes'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createMaterialBottomTabNavigator()

const HomeScreen = () => {
    return (
        <View style={{
            flex: 1,
        }}>
            <Tab.Navigator>
                <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
                <Tab.Screen name={'Recipes'} component={Recipes} />
                <Tab.Screen name={'Settings'} component={SettingsScreen} />
            </Tab.Navigator>
        </View >
    )
}

export { HomeScreen }