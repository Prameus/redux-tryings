import { USER_LOGIN } from "../types/user";

const initalState = {

}

const user = (state = initalState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return { ...state }

        default:
            return { state }
    }
}

export { user }