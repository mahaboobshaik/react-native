import React, { Component } from 'react';
import Game from './game';

class Main extends Component {

    state = {
        gameId: 1
    };

    resetGame = () => {
        this.setState((prevState) => {
            return { gameId: prevState.gameId + 1};
        })
    }

    render(){
        return (
            <Game 
                key={this.state.gameId} onPlayAgain={this.resetGame}
                randomNumberCount={6} initialSeconds={10}/>
        );
    }
}

export default Main;