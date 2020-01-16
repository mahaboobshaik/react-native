import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import MapReview from './MapPreview';
import MapPreview from './MapPreview';

const LocationPicker = props => {

    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    const mappedPickedLocation = props.navigation.getParam('pickedLocation');

    useEffect(() => {

        if(mappedPickedLocation){
            setPickedLocation(mappedPickedLocation);
        }

    }, [mappedPickedLocation])

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if(result.status !== "granted"){
            Alert('Insufficient permissions!', 'You need to grant location permissions to use this app', [{text: "Ok"}]);
            return false;
        }
        return true;
    }

    const getLocationHanlder = async () => {
        const askPermissions = await verifyPermissions();
        if(!askPermissions)
            return;

        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000
            });

            // var location = await Location.watchPositionAsync(
            //     {
            //         enableHighAccuracy: true,
            //         distanceInterval: 1,
            //         timeInterval: 1000
            //     },
            //     newLocation => {
    
            //        console.log('callback is called', newLocation);
    
            //   },
            // );

            console.log(location);
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
        } catch (err) {
            console.log(err);
            // Alert('Could not fetch location!', 'Please try again later or pick a location on the map.', [{text: "Okay"}])
        }
        setIsFetching(false);
    }

    const pickOnMapHanlder = () => {
        props.navigation.navigate('Map')
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation} onPress={pickOnMapHanlder}>
                {
                    isFetching ?
                    <ActivityIndicator size="large" color={Colors.primary} /> :
                    <Text> No location choosen yet!</Text>
                }
            </MapPreview>
            <View style={styles.action}>
                <Button title="Get user location" color={Colors.primary} onPress={getLocationHanlder}/>
                <Button title="Pick on Map" color={Colors.primary} onPress={pickOnMapHanlder}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: "100%",
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%"
    }
})

export default LocationPicker;
