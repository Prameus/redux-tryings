import React, { useState } from 'react'
import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native'
import { Navigation } from './Navigation'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Button } from './components/Button'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Splash } from './screens/Splash'
import { SearchBar } from 'react-native-elements'

const STACK1 = createStackNavigator()

const App = () => {

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={{
                flex: 1,
                backgroundColor: '#333333',
                 }}>

                <SearchBar
                    containerStyle={{marginTop:'10%'}}
                    placeholder={'Type here...'}
                    style={{ flex:1, justifyContent:'center', alignItems:'center'
                    }}
                />
                <Navigation />
            </View>
        </>
    )

}

export { App }

