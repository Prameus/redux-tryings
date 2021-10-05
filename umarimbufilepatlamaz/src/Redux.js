import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './redux/index'
import { Navigation } from './Navigation'

export const Redux = () => {

    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}