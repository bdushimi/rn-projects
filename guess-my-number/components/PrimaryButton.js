import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

export default function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOutercontainer} >
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnercontainer] : styles.buttonInnercontainer}
                android_ripple={{ color: Colors.primary700 }}
                onPress={onPress}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({

    buttonOutercontainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnercontainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 5,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },

    pressed: {
        opacity: 0.75,
    }
})