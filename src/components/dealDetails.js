import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, PanResponder, Animated, 
    Dimensions, Button, Linking, StyleSheet } from 'react-native';

import { priceDisplay } from './util';

import ajax from '../services/ajax';

class DealDetails extends Component {

    imageXPos = new Animated.Value(0);

    imagePanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gs) => {
            this.imageXPos.setValue(gs.dx);
        },
        onPanResponderRelease: (event, gs) => {
            this.width = Dimensions.get("window").width;
            if(Math.abs(gs.dx) > this.width*0.4){
                const direction = Math.sign(gs.dx);
                Animated.timing(this.imageXPos, {
                    toValue: direction * this.width,
                    duration: 250
                }).start(() => {
                    this.handleSwipe(-1 * direction);
                });
            } else {
                Animated.spring(this.imageXPos, {
                    toValue: 0
                }).start();
            }
        }
    });

    handleSwipe = (indexDirection) => {

        if(!this.state.deal.media[this.state.imageIndex + indexDirection]){
            Animated.spring(this.imageXPos, {
                toValue: 0
            }).start();
            return;
        }

        this.setState((prevState) => ({
            imageIndex : prevState.imageIndex + indexDirection
        }), () => {
            this.imageXPos.setValue(indexDirection * this.width);
            Animated.spring(this.imageXPos, {
                toValue: 0
            }).start();
        })
    }

    state = {
        deal: this.props.initialDealData,
        imageIndex: 0
    };

    async componentDidMount(){
        const fullDeal = await ajax.fetchDealDetails(this.state.deal.key);
        this.setState({ deal:fullDeal });
    }

    openDealUrl = () => {
        Linking.openURL(this.state.deal.url);
    }

    render() {
        const { deal } = this.state;
        return (
            <View style={styles.deal}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
                <Animated.Image 
                    {...this.imagePanResponder.panHandlers}
                    source={{ uri : deal.media[this.state.imageIndex]}} 
                    style={[{ left: this.imageXPos}, styles.image]}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.cause}>{deal.cause.name}</Text>
                        <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                    </View>
                </View>
                {
                    deal.user &&
                    <Text>
                        <Image source = {{ uri: deal.user.avatar}} style={styles.avatar} />
                        <Text>{deal.user.name}</Text>
                    </Text>
                }
                <Text>
                    <Text>{deal.description}</Text>
                </Text>
                <Button title="Buy this deal!" onPress={this.openDealUrl} />
            </View>
        );
    }

}

DealDetails.propTypes = {
    initialDealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired
};

const styles = StyleSheet.create ({

    
    back : {
        marginBottom: 5,
        color: '#22f',
        marginLeft: 10
    },
    image : {
        width: '100%',
        height: 150
    },
    info : {
        padding: 10,
        backgroundColor: '#fff'
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
    },
    avatar : {
        width: 60,
        height: 60
    }

});

export default DealDetails;