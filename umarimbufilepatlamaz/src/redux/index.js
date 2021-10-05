import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import { Reducers } from './Reducers/reducers'

export const combinedReducers = combineReducers({ Reducers })

export const store = createStore(Reducers)