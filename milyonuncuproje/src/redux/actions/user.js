import * as userTypes from "../types/user";
import { SIGNINWITHEMAIL } from '../../request/firebase'

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'

export const USER_LOGIN = () => {
    return {
        type: userTypes.USER_LOGIN,
        payload: {},
    }
}


export const USER_SIGNIN = (email, password) => async dispatch => {
    const data = await SIGNINWITHEMAIL(email, password)

    dispatch({
        type: userTypes.USER_SIGNIN,
        payload: {
            uid: data.user.uid
        }
    })

}


