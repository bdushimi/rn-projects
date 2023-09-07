
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = (enteredGoal) => {
    setGoals(currentGoals => [...currentGoals, { data: enteredGoal, id: Math.random().toString() }])
  }

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id)
    })
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  return (
    <View style={styles.container}>
      <Button
        title='Add a goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && 
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
      />}
      <View style={styles.goalsContainer}>
        <Text>Goals List...</Text>
        <FlatList data={goals} renderItem={itemData => {
          return <GoalItem
            text={itemData.item.data}
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
          />
        }}

          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

  goalsContainer: {
    flex: 4
  },
});
