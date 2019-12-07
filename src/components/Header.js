import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

    const { viewStyle, textStyling } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    );
}

const styles = {
    viewStyle:{
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    textStyling: {
        fontSize: 22
    }
}

export default Header;