import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { Homescreen } from './Homescreen'
import 'react-native-gesture-handler'

const Drawer = createDrawerNavigator();

const drawerScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Homescreen" component={Homescreen} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
    );
}
export { drawerScreen }