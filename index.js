import React from 'react';
import { AppRegistry, View } from 'react-native';

import {name as appName} from './app.json';

import Header from './src/components/Header';
import CarList from './src/components/CarList';

const App = () => {
    return (
        <View style={{ flex: 1}}>
            <Header title={appName} />
            <CarList />
        </View>
        
    )
}
AppRegistry.registerComponent('cars', () => App);