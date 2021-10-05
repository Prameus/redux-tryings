import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View, Text, } from 'react-native'

import { home } from 'react-native-vector-icons/Entypo'
import { settings } from 'react-native-vector-icons/Ionicons'
import { foodvariant } from 'react-native-vector-icons/MaterialCommunityIcons'

import { HomeScreen } from './HomeScreen'
import { Recipes } from './Recipes'
import { SettingsScreen } from './SettingsScreen'
import { Splash } from './Splash'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#20B2AA' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 25,
                        left: 25,
                        right: 25,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 15,
                        height: 90,
                        ...styles.shadow
                    }
                }}>
                <Tab.Screen name='HomeScreen' component={HomeScreen} />
                <Tab.Screen name='SettingsScreen' component={SettingsScreen} />
                <Tab.Screen name='Recipes' component={Recipes} />

            </Tab.Navigator>
        </View>
    )
}
const styles = StyleSheet.create({
    //!buton altinda ufak bir golgelendirme olmasini saglayan style
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export { Tabs }