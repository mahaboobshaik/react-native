import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setcourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setcourseGoals( currentGoals => [...currentGoals, {key : Math.random().toString(), value:enteredGoal}]);
    setisAddMode(false);
  }

  const removeGoalHanlder = goalid => {
    setcourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalid);
    })
  }

  const cancleGoalAdditionHandler = () => {
    setisAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancleGoalAdditionHandler}/>
      <FlatList data={courseGoals} keyExtractor={(item, index) => item.key} renderItem={(itemData) => (
        <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHanlder} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
