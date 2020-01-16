import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesAction from '../store/places-action';

import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text);
    }

    const savePlaceHanlder = () => {
        dispatch(placesAction.addPlace(titleValue, selectedImage, selectedLocation));
        props.navigation.goBack();
    }

    const imageTakenHanlder = (imagePath) => {
        setSelectedImage(imagePath);
    }

    const locationPickedHanlder = useCallback((location) => {
        setSelectedLocation(location);
    }, []);

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={titleChangeHandler} value={titleValue} />
                <ImagePicker onImageTaken={imageTakenHanlder} />
                <LocationPicker navigation={props.navigation} onLocationPicked={locationPickedHanlder} />
                <Button title="Save Place" color={Colors.primary} onPress={savePlaceHanlder} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
})

NewPlaceScreen.navigationOptions = navData => {
    return {
        headerTitle: "Add Place"
    }
}

export default NewPlaceScreen;

