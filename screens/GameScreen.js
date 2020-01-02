import React, { Component, useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyels from '../constants/default-styles';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import { render } from 'react-dom';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if(randNum === exclude)
        return generateRandomBetween(min, max, exclude);
    else
        return randNum;
}

// const renderListItem = (value, numOfRound) => (
//     <View key={value} style={styles.listItem}>
//         <BodyText>#{numOfRound}</BodyText>
//         <Text>{value}</Text>
//     </View>
// )

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <Text>{itemData.item}</Text>
    </View>
)

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess.toString());
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHight = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if(currentGuess === props.userChoice){
            onGameOver(pastGuesses)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHanlder = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)){
                Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text:'Sorry!', style: 'cancel'}]);
                return;
        } 

        if(direction === 'lower'){
            currentHight.current === currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHight.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses])
    }

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyels.bodyText}>Opponents's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={() => { nextGuessHanlder('lower') }}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton onPress={() => { nextGuessHanlder('greater') }} >
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {
                        pastGuesses.map((guess, index) => (
                            renderListItem(guess, pastGuesses.length - index+1)
                        ))
                    }
                </ScrollView> */}
                <FlatList 
                    keyExtractor={item => item} 
                    data={pastGuesses} 
                    renderItem={renderListItem.bind(this, pastGuesses.length)} 
                    contentContainerStyle={styles.list}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: "90%"
    },
    listContainer:{
        flex: 1,
        width: "60%"
    },
    list: {
        flexGrow: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listItem: {
        borderColor: '#ccc',
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%"
    }
})

export default GameScreen;
