import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { getStatusBarHeight as getSBH } from 'react-native-status-bar-height'
import { Button } from './components'
import AntDesing from 'react-native-vector-icons/AntDesign'

const App = () => {
    const [activePage, setActivePage] = useState(0)

    const buttons = [
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
        {
            text: 'Button'
        },
    ]
    return (
        <>
            <StatusBar
                backgroundColor={'transparent'}
                translucent
            />

            <View
                style={{
                    flex: 1,
                    backgroundColor: '#222222',
                    borderColor: 'yellow',
                    flexDirection: 'column',
                    borderWidth: 2,
                }}
            >

                <View style={{ height: getSBH(), backgroundColor: 'grey', }} />

                <View
                    style={{ borderWidth: 2, borderColor: 'yellow', }} >

                    <FlatList 
                        data={buttons}
                        horizontal
                        renderItem={({ item, index }) => (
                            <Button
                                text={item, text}
                                style={{}}
                                textStyle={{}}
                                isActive={activePage === index}
                                onPress={() => setActivePage(index)}
                            />  
                        )}
                        keyExtractor={(d, i) => i.toString()}
                    />
                </View>

                <AntDesing name={''} color={'grey'} size={32}/>
            </View>
        </>
    )

}

export { App }