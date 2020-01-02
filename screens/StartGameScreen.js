import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    

    const numberInuputHanlder = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHanlder = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }
    
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener("change", updateLayout)
        }
    })

    const confirmInputHanlder = () => {
        const choosenNumber = parseInt(enteredValue);
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHanlder}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;
    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton
                    onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            </Card>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.screen}>
                        <BodyText style={styles.title}>Start a New Game</BodyText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a Number</BodyText>
                            <Input style={styles.input} 
                                blurOnSubmit 
                                autoCapitalize='none' 
                                autoCorrect={false} 
                                keyboardType='number-pad' 
                                maxLength={2}
                                onChangeText={numberInuputHanlder}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{...styles.button, width: buttonWidth}}><Button title="Reset" color={Colors.accent} onPress={resetInputHanlder} /></View>
                                <View style={{...styles.button, width: buttonWidth}}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHanlder} /></View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,    
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 50,
        fontFamily: 'raleway-medium'
    },
    inputContainer: {
        width: "80%",
        // maxWidth: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        // width: 100
        width: Dimensions.get('window').width / 4,

    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})

export default StartGameScreen;

