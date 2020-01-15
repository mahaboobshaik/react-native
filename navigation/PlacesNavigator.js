import React from 'react';
import { Platform } from 'react-native';
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';

const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : {},
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,

    }
})

export default createAppContainer(PlacesNavigator);