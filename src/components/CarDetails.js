import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Linking } from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';

class CarDetails extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    render() {

        const { brand, models } = this.props;
        const { headerContainer, headerText, imageStyle } = styles;
        console.log(models);
        return (
            <Item>
                {
                    models &&
                    models.map((model) => {
                        return (
                            <View key={model.name}>
                                <ItemSection>
                                    <View style={headerContainer}>
                                        <Text style={headerText}>{model.name}</Text>
                                        <Text style={headerText}>{brand}</Text>
                                    </View>
                                </ItemSection>
                                <ItemSection>
                                    <Image style={imageStyle} source={{ uri: model.image}} />
                                </ItemSection>
                                <ItemSection>
                                    <Button buttonPress={() => { Linking.openURL(model.url) }}/>
                                </ItemSection>
                            </View>
                            
                        )
                    })
                }
            </Item>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        // width: 0
    }
})


export default CarDetails;
