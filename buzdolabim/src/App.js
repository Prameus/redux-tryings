import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler'

import * as Dimensions from './utils/theme'
import { Homescreen } from './screens/Homescreen'
import store from './redux/index'
import { DrawerScreen } from './screens/drawerScreen'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Provider store={store}>
                <DrawerScreen />
            </Provider>
        </View>
    )
}

export { App }