import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class ItemSection extends Component {
    render() {

        const { viewStyle } = styles;

        return (
            <View style={viewStyle}>
                { this.props.children }
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewStyle: {
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    }
})


export default ItemSection;