import * as actionTypes from '../types/types'
import { Reducer } from '../Actions/action'

const initialState = {
    categorys: [],
    currentCategory: []
}

export const Reducers = (state = initialState, { type, payload }) => {

    switch (type) {
        case actionTypes.reducers:

            console.log('actionTypes`lardan reducers calisti')

            break;

        default:
            initialState
            break;
    }

}