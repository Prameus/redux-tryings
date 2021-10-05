import React from 'react'
import { View,Text, TabBarIOS, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Trends } from '../Trends'
import { Subscribed } from '../Subscribed'
import { Notification} from '../Notification'
import { Library} from '../Library'
import { HomeTab } from '../HomeTab'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Tab = createBottomTabNavigator()

const Main = () => {

    const TabBar = ({state: {index}, navigation }) => {
        return (
            <View
                style={{
                    backgroundColor:'#111111',
                    flexDirection: 'row',
                    justifyContent:'space-around'
            }}>
                <TouchableOpacity onPress={()=> navigation.jumpTo('HomeTab')}>
                    <Entypo
                        name={'home'}
                        size={40}
                        color={index===0?'red':'black'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.jumpTo('Trends')}>
                    <Ionicons
                        name={'flame-sharp'}
                        size={40}
                        color={index === 1 ? 'red' : 'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.jumpTo('Subscribed')}>
                    <MaterialCommunityIcons
                        name={'youtube-subscription'}
                        size={40}
                        color={index === 2 ? 'red' : 'black'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.jumpTo('Notification')}>
                    <Ionicons
                        name={'notifications'}
                        size={40}
                        color={index === 3 ? 'red' : 'black'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.jumpTo('Library')}>
                    <MaterialIcons
                        name={'folder'}
                        size={40}
                        color={index === 4 ? 'red' : 'black'} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#333333'
            }}>
            <Tab.Navigator tabBar={TabBar}>
                <Tab.Screen name={'HomeTab'} component={HomeTab} />
                <Tab.Screen name={'Trends'} component={Trends} />
                <Tab.Screen name={'Subscribed'} component={Subscribed} />
                <Tab.Screen name={'Notification'} component={Notification} />
                <Tab.Screen name={'Library'} component={Library} />
            </Tab.Navigator>
        </View>
    )
}

export { Main }