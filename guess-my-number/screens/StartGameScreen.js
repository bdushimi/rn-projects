import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from 'react'
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

export default function StartGameScreen({ onConfirmNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const inputNumber = parseInt(enteredNumber)

        if (isNaN(inputNumber) || inputNumber <= 1 || inputNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return;
        }
        onConfirmNumber(enteredNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary600,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
    },

    numberInput: {
        height: 50,
        width: 60,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },

    buttonContainer: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        marginTop: 100, 
        alignContent: 'center',
    }, 
    instructionText: {
        color: Colors.acc,
        fontSize: 24,
    }
})
