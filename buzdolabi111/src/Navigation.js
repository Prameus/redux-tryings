import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Tabs } from './screens/Tabs'
import { MaterialScreen } from './screens/AnotherTab'

const STACK1 = createStackNavigator();

const Navigation = () => {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <MaterialScreen />
            </NavigationContainer>
        </View>
    )
}

export { Navigation }