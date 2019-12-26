import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setenteredGoal] = useState('');
    const goalInputHanlder = (enteredText) => {
        setenteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setenteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} vale={enteredGoal} onChangeText={goalInputHanlder}/>
                <View style={styles.actions}>
                    <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
                    <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        width: "80%", 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    actions: {
        width: "60%",
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button:{
        width: "40%"
    }
  });
  

export default GoalInput;
