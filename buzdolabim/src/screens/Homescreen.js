import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'

const mapStateToProps = user => ({ user })

const mapDispatchToProps = dispatch => ({

})

const Homescreen = connect(mapStateToProps, mapDispatchToProps)(props => {

    const { user } = props

    const addFood = () => {
        setFood
        data.push(food)
    }

    const [food, setFood] = useState('')

    const data =
        [
            {
                product: 'a'
            },

            {
                product: 'b'
            },

            {
                product: 'c'
            },

            {
                product: 'd'
            },

            {
                product: 'e'
            },

            {
                product: 'f'
            },

            {
                product: 'g'
            },

            {
                product: 'h'
            },

            {
                product: 'l'
            },

            {
                product: 'm'
            },

            {
                product: 'n'
            },

            {
                product: 'k'
            },

            {
                product: 'o'
            },

            {
                product: 't'
            },

            {
                product: 'r'
            },

            {
                product: 'x'
            },

            {
                product: 'z'
            },
        ]


    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Button title={'Add Item'} onPress={addFood} />
            </View>
            <FlatList
                horizontal={false}
                data={data.reverse}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.mainButton} title={item.product}>
                        <Text>
                            {item.product}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => item.product}
            />
        </View>
    )
})
const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: '#6DFDA6',
        color: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 50,
        flex: 1,

    }
})

export { Homescreen }