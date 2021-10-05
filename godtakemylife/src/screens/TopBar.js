import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from 'react-native-vector-icons/Entypo'
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons'


const TopBar = () => {
    <View>
        <TouchableOpacity>
            <Entypo name={'home'} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Entypo name={'news'} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Entypo name={'message'} />
        </TouchableOpacity>

        <TouchableOpacity>
            <MaterialCommunityIcons name={'face-profile-woman'} />
        </TouchableOpacity>

    </View>
}