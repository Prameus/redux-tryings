import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Touchable, TextInput } from 'react-native'
import { connect, Provider } from 'react-redux'
import store from './Redux/index'

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

const Splash = connect(mapStateToProps, mapDispatchToProps)(() => {

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            flex: 1,

        }}>
            <Provider store={store}>
                <TextInput style={{
                    borderColor: '#88888888',
                    borderWidth: 1,
                    width: '70%',
                    paddingHorizontal: 100
                }}
                    placeholder={'yaz kizim'} />

                <TextInput style={{
                    borderColor: '#88888888',
                    borderWidth: 1,
                    width: '70%',
                    marginTop: 10,
                    paddingHorizontal: 100
                }}
                    placeholder={'40 kilo cimento'} />

                <TouchableOpacity
                    style={{
                        borderRadius: 10,
                        width: '40%',
                        backgroundColor: '#44444433',
                        paddingVertical: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                    <Text style={{ color: 'black' }}>press</Text>
                </TouchableOpacity>
            </Provider>
        </View>
    )

}
)

export { Splash }