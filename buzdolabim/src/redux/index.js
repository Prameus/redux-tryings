import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import 'react-native-reanimated'
import { keyboard } from './reducers/keyboard'

const combinedReducers = combineReducers({
    keyboard
})

const store = createStore(combinedReducers, applyMiddleware(thunk))

export default store