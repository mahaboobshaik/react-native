import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, Button } from 'react-native';
import shuffle from 'lodash.shuffle';

import RandomNumber from './randomNumber';

class Game extends Component {
    
    static propTypes = {
        randomNumberCount : PropTypes.number.isRequired,
        initialSeconds: PropTypes.number.isRequired,
        onPlayAgain: PropTypes.func.isRequired,
    }

    state = {
        selectedId: [],
        remainingSeconds: this.props.initialSeconds
    };

    gameStatus = 'PLAYING';

    randomNumbers = Array.from({ length: this.props.randomNumberCount })
                        .map(() => { return 1 + Math.floor(10 * Math.random()) });
    target = this.randomNumbers.slice(0, this.props.randomNumberCount - 2)
                        .reduce((acc, curr) => acc + curr, 0);

    shuffledRandomNumbers = shuffle(this.randomNumbers);

    componentDidMount(){
        this.intrevalId = setInterval(() => {
            this.setState((prevState) => {
                return { remainingSeconds: prevState.remainingSeconds - 1 }
            }, () => {
                if(this.state.remainingSeconds === 0)
                    clearInterval(this.intrevalId);
            })
        }, 1000);

    }
    
    componentWillUnmount(){
        clearInterval(this.intrevalId);
    }

    componentWillUpdate(nextProps, nextState){
        if(nextState.selectedId != this.state.selectedId || nextState.remainingSeconds === 0){
            this.gameStatus = this.calcGameStatus(nextState);
            if(this.gameStatus !== "PLAYING"){
                clearInterval(this.intrevalId);
            }
        }
    }

    isNumberSelected = (numberIndex) => {
        return this.state.selectedId.indexOf(numberIndex) >= 0;
    }

    selectNumber = (numberIndex) => {
        this.setState((prevState) => ({
            selectedId: [...prevState.selectedId, numberIndex]
        }));
    }

    calcGameStatus = (nextState) => {
        
        const sumSelected = nextState.selectedId.reduce((acc, curr) => {
            return acc + this.shuffledRandomNumbers[curr];
        }, 0);

        if(nextState.remainingSeconds === 0)
            return 'LOST';
        if(sumSelected < this.target)
            return "PLAYING";
        else if(sumSelected === this.target)
            return "WON"
        else if(sumSelected > this.target)
            return "LOST";

    }

    render(){
        const gameStatus = this.gameStatus;
        return (
            <View style={styles.container}>
                <Text style={[styles.target, styles[`STATUS_${gameStatus}`]]}>{this.target}</Text>
                <View style={styles.randomContainer}>
                    {
                        this.shuffledRandomNumbers.map((randomnumber, index) => {
                            return <RandomNumber key={index} number={randomnumber} 
                                        id={index}
                                        isDisabled={this.isNumberSelected(index) || gameStatus !== 'PLAYING'}
                                        onPress={this.selectNumber}/>
                            // return <Text key={index} style={styles.random}>{randomnumber}</Text>
                        })
                    }
                </View>
                {
                    this.gameStatus != "PLAYING" &&
                        <Button title="Play Again" onPress={this.props.onPlayAgain} />
                }
                <Text>{this.state.remainingSeconds}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex:1
    },
    target : {
        fontSize: 50,
        backgroundColor: '#aaa',
        margin: 50,
        textAlign: 'center'
    },
    randomContainer : {
        flex : 1,
        flexDirection: 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-around'
    },
    STATUS_PLAYING : {
        backgroundColor : '#bbb'
    },
    STATUS_WON : {
        backgroundColor : 'green'
    },
    STATUS_LOST : {
        backgroundColor : 'red'
    }
});

export default Game;