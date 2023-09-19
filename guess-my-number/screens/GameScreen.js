import { View, Text, StyleSheet, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import generateRandomBetween from '../utils/random'
import Title from '../components/Title'
import NumberContainer from '../components/NumberContainer'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'
import {Ionicons} from '@expo/vector-icons'


let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ userNumber, onGameOver }) {

    const generatedGuessNumber = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(generatedGuessNumber)

    useEffect(() => {

        if (currentGuess == userNumber) {
            onGameOver()
        }

    }, [currentGuess, userNumber, onGameOver])

    const nextGuessHandler = (direction) => {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Dont' lie!", 'You know that this is wrong...', [{ text: 'Sorry', style: 'Cancel' }])
            return
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionTextCustomStyle}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1
    },

    instructionTextCustomStyle: {
        marginBottom: 16
    }
})