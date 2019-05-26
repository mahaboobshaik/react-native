import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Welcome extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Button title="Login" onPress={() => this.props.navigation.navigate('Dashboard')} />
                <Button title="Sign Up" onPress={() => alert("Sign up")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
    sampleText :{
        fontSize: 23
    }
})

export default Welcome;
