import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class Button extends Component {

    constructor(props){
        super(props);
    }

    onSubmit(){
        console.log("button pressed");
    }

    render() {

        const { buttonStyle, textStyle } = styles;

        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.buttonPress}>
                <Text style={textStyle}>Click Me</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7
    },
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        paddingTop:6,
        paddingBottom: 6,
        color: 'white',
        textAlign: 'center'
    }
})

export default Button;
