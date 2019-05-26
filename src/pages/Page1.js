import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Page1 extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.sampleText}>Page1</Text>
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

export default Page1;
