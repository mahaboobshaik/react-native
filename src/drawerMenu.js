import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';

class DrawerMenu extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <LinearGradient colors={['#a6c0fe', '#f68084']} style={styles.linearGradient}>
                        <View style={styles.profile}>
                            <Icon style={styles.profileIcon} name={'user'} size={50}/>
                            <Text style={styles.username}>Mahaboob Basha Shaik</Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.profile}>
                        <Icon style={styles.profileIcon} name={'user'} size={50}/>
                        <Text style={styles.username}>Mahaboob Basha Shaik</Text>
                    </View>
                    <DrawerItems {...this.props}/>
                </SafeAreaView>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
        color: 'white'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    profileIcon: {
       marginTop: 10,
       color: 'white'
    },
    username: {
        color: 'white'
    }
})

export default DrawerMenu;
 