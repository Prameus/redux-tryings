import { KEYBOARD_CLOSE, KEYBOARD_OPEN } from '../actions/user'
import { USER_LOGIN, USER_SIGNIN } from '../types/user'

const initalState = {
    uid: ''
}

const user = (state = initalState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {}

        case USER_SIGNIN:
            return { ...state, uid: payload.uid }

        default:
            return { ...state };
    }
}

export { user }