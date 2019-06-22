import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems
} from 'react-navigation';

import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page11 from './pages/Page11';
import Page111 from './pages/Page111';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import DrawerMenu from './drawerMenu';

const Page11Statck = createStackNavigator({
    Page11 : { 
        screen : Page11,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Page11',
                headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
            }
        }
    },
    page111 : { screen : Page111}
},{
    defaultNavigationOptions:{
        // gesturesEnabled: false
    }
})

const Page12Statck = createStackNavigator({
    Page12 : { 
        screen : Page12,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Page12',
                headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
            }
        }
    }
})

const Page13Statck = createStackNavigator({
    Page13 : { 
        screen : Page13,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Page13',
                headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
            }
        }
    }
})

const DashboardTabNavigator = createBottomTabNavigator({
    Page11Statck, Page12Statck, Page13Statck
},{
    navigationOptions: ({navigation}) => {
        const { routeName } = navigation.state.routes[navigation.state.index];

        return {
            header: null,
            headerTitle: routeName
        }
    }
})

const DashboardStackNavigator = createStackNavigator({
    DashboardTabNavigator: DashboardTabNavigator
}, {
    defaultNavigationOptions : ({navigation}) => {
        return {
            headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
        }
    }
})

const Page1Statck = createStackNavigator({
    Page1 : { 
        screen : Page1,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Page1',
                headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
            }
        }
    }
})

const Page2Statck = createStackNavigator({
    Page2 : { 
        screen : Page2,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Page2',
                headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
            }
        }
    }
})

const Page3Statck = createStackNavigator({
    Page12 : { 
        screen : Page3,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Page3',
                headerLeft: <Icon name={'navicon'} size={30} 
                            onPress={() => navigation.openDrawer()}
                            />
            }
        }
    }
})

const AppDrawerNavigator = createDrawerNavigator({
    // Dashboard : { screen : DashboardStackNavigator},
    Page1 : { screen : DashboardStackNavigator},
    Page2 : { screen : Page2Statck},
    Page3 : { screen : Page3Statck}
}, 
{
    initialRouteName: 'Page1',
    contentComponent: DrawerMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
}
)


const AppSwitchNavigator = createSwitchNavigator({
    Welcome: { screen: Welcome},
    Dashboard: { screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppSwitchNavigator);

class Routes extends Component {
    render(){
        return (
            <AppContainer />
        )
    }
}

export default Routes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    naviagionHeader: {
        width : '100%',
        height: 150,
        backgroundColor: 'red'
    }
})