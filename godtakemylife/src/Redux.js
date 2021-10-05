import React from 'react'
import { Navigation } from './Navigation';
import { Provider } from 'react-redux';
import store, { } from './store'

const Redux = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    )
}

export { Redux };
