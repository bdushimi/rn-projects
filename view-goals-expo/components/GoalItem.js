import { View, Text, StyleSheet, Pressable, TouchableHighlight, Platform } from 'react-native';
import { useState } from 'react';

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      {Platform.OS === 'android' ? (
        <Pressable
          android_ripple={{ color: '#210644' }}
          onPress={onDeleteItem.bind(this, id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalItemText}>{text}</Text>
        </Pressable>
      ) : (
        <TouchableHighlight
          onPress={onDeleteItem.bind(this, id)}
          underlayColor="#210644"
          style={styles.pressedItem}
        >
          <Text style={styles.goalItemText}>{text}</Text>
        </TouchableHighlight>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },

  pressedItem: {
    color: '#210644',
  },

  goalItemText: {
    padding: 8,
    color: 'white',
  },
});
