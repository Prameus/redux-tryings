import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTab } from '../HomeTab'
import { SearchTab } from '../SearchTab'
import { ProfileTab } from '../ProfileTab'
import { MessageTab } from '../MessageTab'
import { NotifyTab } from '../Notifytab'

import FontListo from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Tab = createBottomTabNavigator()

const Main = () => {

    const TabBar = ({ state: { index }, Navigation:{jumpTo} }) => {
        
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#111111'
            }}>
                <View>
                    <TouchableOpacity
                        style={{ paddingVertical: 10 }}
                    onPress={() => jumpTo('HomeTab')}>
                    <Fontisto
                        name={'blood-drop'}
                            color={index === 0 ? '#49e61e':'#444444'}
                        size={32}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ paddingVertical: 10 }}
                        onPress={() => jumpTo('SearchTab')}>
                        <Fontisto
                            name={'search'}
                            color={index === 1 ? '#49e61e' : '#444444'}
                            size={32}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10 }}
                        onPress={() => jumpTo('ProfileTab')}>
                        <Fontisto
                            name={'message'}
                            color={index === 2 ? '#49e61e' : '#444444'}
                            size={32}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10 }}
                        onPress={() => jumpTo('MessageTab')}>
                        <Fontisto
                            name={'notifications'}
                            color={index === 3 ? '#49e61e' : '#444444'}
                            size={32}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 10 }}
                        onPress={() => jumpTo('NotifyTab')}>
                        <Fontisto
                            name={'user'}
                            color={index === 4 ? '#49e61e' : '#444444'}
                            size={32}
                        />
                    </TouchableOpacity>

                </View>
            </View>
    )    
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#333333'
            }}
        >
            <Tab.Navigator
                tabBar={TabBar}
            >
                <Tab.screen name={'HomeTab'} component={HomeTab} />
                <Tab.screen name={'SearchTab'} component={SearchTab} />
                <Tab.screen name={'ProfileTab'} component={ProfileTab} />
                <Tab.screen name={'MessageTab'} component={MessageTab} />
                <Tab.screen name={'NotifyTab'} component={NotifyTab} />
            </Tab.Navigator>
        </View>
    )
}

export { Main }