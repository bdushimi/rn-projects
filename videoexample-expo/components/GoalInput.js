import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'
import { useState } from 'react'

export default function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Add goal" onPress={addGoalHandler}></Button>
                    <Button title="Cancel" onPress={addGoalHandler}></Button>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: '70%',
        marginRight: 8,
        padding: 4
    },

    buttonContainer: {
        flexDirection: 'row'
    }
})
