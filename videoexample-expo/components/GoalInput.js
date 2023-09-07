import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
    props.onCancel();
  };

  const cancelHandler = () => {
    props.onCancel();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandler} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311B6B',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 4,
    color: '#120438',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },

  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
