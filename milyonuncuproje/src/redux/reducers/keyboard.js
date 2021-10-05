import { KEYBOARD_CLOSE, KEYBOARD_OPEN } from '../types/keyboard'

const initalState = {
    active: false,
    height: 0
}

const keyboard = (state = initalState, { type, payload }) => {
    switch (type) {
        case KEYBOARD_OPEN:
            return {
                ...state, active: true, height: payload
            }

        case KEYBOARD_CLOSE:
            return {
                ...state, active: false, height: 0
            }

        default:
            return { ...state }
    }
}

export { keyboard }