import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ItemSection from './ItemSection';

class Item extends Component {
    render() {

        const { viewStyle } = styles;

        return (
            <View style={viewStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewStyle: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: 'gainsboro',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        opacity: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
})

export default Item;
