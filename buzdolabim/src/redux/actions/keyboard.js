import * as types from '../types/keyboard'

export const KEYBOARD_CLOSE = () => {
    return {
        payload: 0,
        type: types.KEYBOARD_CLOSE
    }
}
debugger
export const KEYBOARD_OPEN = ({ endCoordinates: { height } }) => {
    return {
        paylaod: height,
        type: types.KEYBOARD_OPEN
    }
}