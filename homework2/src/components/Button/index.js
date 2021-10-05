import React from 'react'
import { View, ViewPropTypes, Text, TouchableOpacity, TextPropTypes } from 'react-native'
import propTypes from 'prop-types'

const Button = props => {
    const { text, onPress, style, textStyle, isActive } = props

    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={{ marginHorizontal: 12, marginVertical: 8 }}
            >
                <Text
                    style={[
                        {
                            color: 'white',
                            fontSize: 18,
                            fontWeight: '300'
                        },
                        textStyle
                    ]}>
                    {text}</Text>
            </TouchableOpacity>
            <View style={{
                backgroundColor: '#6bf748',
                height: 3,
                width: '70%',
                alignSelf: 'center',
                display: isActive ? 'flex' : 'none'
            }} />
        </View>
    )
}

Button.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
    style: ViewPropTypes.style,
    textStyle: ViewPropTypes.style,
    isActive: propTypes.bool
}

Button.defaultProps = {
    text: 'buton',
    onPress: () => alert('butona dokunuldu'),
    style: {},
    textStyle: {},
    isActive: false
}

export { Button }