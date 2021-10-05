import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SettingsScreen } from './SettingsScreen'

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{}}>HomeScreen</Text>
            <Tab.Navigator>
                <Tab.Screen name={'SettingsScreen'} component={SettingsScreen} />
                <Tab.Screen name={'SettingsScreen'} component={SettingsScreen} />
            </Tab.Navigator>
        </View>
    )
}

export { HomeScreen }