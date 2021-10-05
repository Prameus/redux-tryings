import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { user, keyboard } from './reducers'

const combinedReducers = combineReducers({
    user,
    keyboard
})

const store = createStore(combinedReducers, applyMiddleware(thunk))

export default store