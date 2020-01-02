import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-light': require('./assets/fonts/Raleway-Light.ttf'),
    'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf')
  })
}

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={() => setDataLoaded(true)}
              onError={(err) => { console.log(err)} }/>
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }
  
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />
  // content = <GameOverScreen roundsNumber={1} userNumber={1} onRestart={configureNewGameHandler} />
  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <SafeAreaView style={styles.screen}>
      {/* <View> */}
        <Header title="Guess a Number" />
        { content }
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
