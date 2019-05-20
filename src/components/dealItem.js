import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { priceDisplay } from './util';

class DealItem extends Component {


    handlePress = () => {
        this.props.onPress(this.props.deal.key);
    }

    render() {
        const { deal } = this.props;
        return (
            <TouchableOpacity style={styles.deal}
                onPress={this.handlePress}>
                <Image source={{ uri : deal.media[0]}} 
                    style={styles.image}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.cause}>{deal.cause.name}</Text>
                        <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

DealItem.propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create ({

    deal : {
        marginHorizontal: 12,
        marginTop: 12
    },  
    image : {
        width: '100%',
        height: 150
    },
    info : {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0
    },  
    title : {
        flex: 1,
        fontWeight: 'bold'
    },
    footer : {
        flexDirection: 'row'
    },
    price : {
        flex: 1,
        textAlign: 'right'
    },
    cause : {
        flex: 1
    }

});

export default DealItem;