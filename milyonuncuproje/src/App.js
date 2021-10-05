import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/index'

import { Splash } from './screens/splash/index'

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Provider store={store}>
                <Splash />
            </Provider>
        </View>
    )
}

export { App }