import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

const AUTH = auth()
const DB = database()

export const refs = {
    users: DB.ref(`/USERS`),
    userinfo: uid => DB.ref(`/USERS/${uid}/info`)
}


export const SIGNINWITHEMAIL = (email, password) => new Promise((resolve, reject) => {

    AUTH
        .createUserWithEmailAndPassword(email, password)
        .then(d => {
            const uid = d.user.uid
            console.log('test', d)

            SET(refs.userinfo(uid), { name: 'ada', surname: 'lovelace', age: '206' })
                .then(
                    () => {
                        console.log('data set')
                        resolve()
                    })
                .catch(reject)

        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        })
})

export const SET = (path, data) => Promise((resolve, reject) => {
    ref
        .set(data)
        .then(resolve)
        .catch(reject)
})