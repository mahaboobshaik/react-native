import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import DealItem from './dealItem';

class DealList extends Component {
    render() {
        return (
            <View style={styles.list}>
                <FlatList 
                    data={this.props.deals} 
                    renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress}/>}
                />
            </View>
        );
    }
}

DealList.propTypes = {
    deals: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create ({

    list : {
        backgroundColor : '#eee',
        width: '100%',
    }

});

export default DealList;