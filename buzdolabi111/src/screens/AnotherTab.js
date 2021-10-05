import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons'

import { HomeScreen } from './HomeScreen'
import { Recipes } from './Recipes'
import { SettingsScreen } from './SettingsScreen'

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator()

const MaterialScreen = () => (

    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFF"
        shifting={true}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name={"home"} color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Recipes"
            component={Recipes}
            options={{
                tabBarLabel: 'Recipes',
                tabBarColor: '#FFD700',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name={"food-variant"} color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Settings',
                tabBarColor: '#8B0000',
                tabBarIcon: ({ color }) => (
                    <Octicons name={'settings'} color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>

)

const HomeStackScreen = ({ navigation }) => {
    <HomeStack.Navigator screenOptions={{}} >
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='Recipes' component={Recipes} />
        <HomeStack.Screen name='Settings' component={SettingsScreen} />
    </HomeStack.Navigator>
}

export { MaterialScreen }