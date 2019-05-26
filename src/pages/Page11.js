import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Page11 extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Button title="Go to page11 details screen" onPress={() => this.props.navigation.navigate('page111')} />
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

export default Page11;
