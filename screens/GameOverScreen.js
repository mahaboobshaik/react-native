import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';

import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <BodyText >The Game is Over!</BodyText>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../assets/success.png')}
                        // source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
                        fadeDuration={300}
                        style={styles.image} 
                        resizeMode="cover"
                        />
                </View>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.heighlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.heighlight}>{props.roundsNumber}</Text></BodyText>
                <BodyText>Number was: {props.userNumber}</BodyText>
                <MainButton onPress={props.onRestart} >New Game</MainButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        // width: 300,
        width: Dimensions.get('window').width * 0.7,
        // height: 300,
        height: Dimensions.get('window').width * 0.7,
        // borderRadius: 150, 
        borderRadius: Dimensions.get('window').width * 0.7,
        borderWidth: 3,
        borderColor: 'black',
        overflow: "hidden",
        marginVertical: 10
    },
    resultText: {
        textAlign: 'center'
    },  
    heighlight: {
        color: Colors.primary
    }
})

export default GameOverScreen;