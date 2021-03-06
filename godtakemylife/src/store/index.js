import { createStore, combineReducers } from 'redux'

import { keyboard } from './reducers'

const combinedReducers = combineReducers({
    keyboard
})

const store = createStore(keyboard)

export * from './actions'
export default store
