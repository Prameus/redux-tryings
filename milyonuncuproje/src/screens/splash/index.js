import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'

import { USER_LOGIN, USER_SIGNIN } from '../../redux/actions/user'

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = dispatch => ({
    USER_LOGIN: payload => dispatch(USER_LOGIN(payload)),
    USER_SIGNIN: (email, password) => dispatch(USER_SIGNIN(email, password))
});

const Splash = connect(mapStateToProps, mapDispatchToProps)(props => {
    const { user } = props


    const submit = () => {
        isSignIn ?
            props.USER_SIGNIN({ email, name, password }) :
            props.USER_LOGIN({ email, password })
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [isSignIn, setSignIn] = useState(true)
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>
            <Text style={{
                color: '#4267B2',
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: '20%'
            }}>Facebook</Text>

            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {isSignIn &&
                    <TextInput
                        style={{
                            width: '80%',
                            borderColor: '#44444433',
                            borderWidth: 1,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 3,
                            borderBottomLeftRadius: 2,
                            borderBottomRightRadius: 2,
                            paddingHorizontal: 10,
                            marginTop: 10,
                        }} placeholder={'Name and Surname'}
                        value={name}
                        onChangeText={setName}
                        keyboardType={'name-phone-pad'}
                    />
                }
                <TextInput

                    style={{
                        width: '80%',
                        borderColor: '#44444433',
                        borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 3,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        paddingHorizontal: 10,
                        marginTop: 10,
                    }} placeholder={'E-mail'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType={'email-address'}
                />

                <TextInput
                    style={{
                        width: '80%',
                        borderColor: '#44444433',
                        borderWidth: 1,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 3,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        marginTop: 10,
                        paddingHorizontal: 10,
                    }} placeholder={'Password'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    maxLength={16} />
                {isSignIn &&
                    <TextInput
                        style={{
                            width: '80%',
                            borderColor: '#44444433',
                            borderWidth: 1,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 3,
                            borderBottomLeftRadius: 2,
                            borderBottomRightRadius: 2,
                            marginTop: 10,
                            paddingHorizontal: 10,
                        }} placeholder={'Your Password Again'}
                        value={password2}
                        onChangeText={setPassword2}
                        secureTextEntry={true}
                        maxLength={16} />
                }

                < TouchableOpacity
                    onPress={(submit)}
                    style={{
                        borderRadius: 10,
                        width: '40%',
                        backgroundColor: '#4267B2',
                        paddingVertical: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }} >
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black'
                    }}>{isSignIn ? 'Sign In ' : 'Log In'}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                        setSignIn(!isSignIn)
                    }}
                    style={{
                        borderRadius: 10,
                        width: '40%',
                        paddingVertical: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black',
                        textDecorationLine: 'underline',
                        borderBottomWidth: 1,
                        borderColor: 'silver',
                        paddingHorizontal: 10,
                    }}>{isSignIn ? 'Log In' : 'Sign In'}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
})

export { Splash }