import React from 'react'
import { View, ViewPropTypes, /*TextPropTypes */ } from 'react-native'
import PropTypes from 'prop-types'
import {  Button as RNEButton } from 'react-native'

const Button = props => {
    const { text, onPress, style, textStyle, isActive } = props;

    return (
        <View>

            <RNEButton
                title={text}
                type="clear"
                onPress={onPress}
                titleStyle={{
                    color:'white'
                }}
            />

            <View style={{
                backgroundColor: '#6bf748',
                height: 3,
                width: '90%',
                alignSelf: 'center',
                display: isActive? 'flex' : 'none'

            }} />
        </View>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
    textStyle: ViewPropTypes.style,
    isActive: propTypes.bool
}


Button.defaultProps = {
    text: 'Buton',
    onPress: () => alert('dokundun'),
    style: {},
    textStyle: {},
    isActive: false,
}
export { Button };
//propTypes
//default Props
