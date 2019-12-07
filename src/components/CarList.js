import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

import CarDetails from './CarDetails';

class CarList extends Component {

    constructor(props){
        super(props);
        this.state = {
            carList: []
        }
    }

    componentDidMount(){
        axios.get('https://givecars.herokuapp.com')
            .then((res) => {
                this.setState({carList: res.data});
            })
    }

    render(){

        const { carList } = this.state;
        return (
            <ScrollView>
                <Text>Car List</Text>
                {
                    carList.map((car) => {
                        return (
                            <View key={car.brand}>
                                <Text>{car.brand}</Text>
                                <CarDetails models={car.model} brand={car.brand}/>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

export default CarList;