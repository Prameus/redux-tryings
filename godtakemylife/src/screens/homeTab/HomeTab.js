import { NavigationContainer, StackActions } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ProfileTab, MessageTab, NewsTab } from '..'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { allColors } from '../../theme'

const Tab = createMaterialTopTabNavigator()

const HomeTab = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: allColors.white
        }}>
            <Tab.Navigator style={{}}>
                <Tab.Screen name={'HomeTab'} component={HomeTab} />
                <Tab.Screen name={'ProfileTab'} component={ProfileTab} />
                <Tab.Screen name={'MessageTab'} component={MessageTab} />
                <Tab.Screen name={'NewsTab'} component={NewsTab} />
            </Tab.Navigator>
        </View>
    )
}

export { HomeTab }

