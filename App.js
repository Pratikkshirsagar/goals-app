import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...courseGoals, enteredGoal]);
  };

  return (
    <View style={style.screen}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={style.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal, i) => (
          <View key={i} style={style.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
