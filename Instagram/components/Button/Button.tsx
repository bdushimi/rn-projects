import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@theme/colors'
import fonts from '@theme/fonts'


interface IButton {
    text?: string
    onPress?: () => void
}

const Button = ({ text = "", onPress = () => { } }: IButton) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text>{text}</Text>
        </Pressable>
    )
}

export default Button


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.lightgrey,
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        margin: 5,
    },

    text: {
        color: Colors.black,
        fontWeight: fonts.weight.semi
    }
})