
import { Platform } from 'react-native';
import Colors from '../constants/Colors';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {
    // mode: 'modal',
    // initialRouteName: "Categories",
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null
        },
        headerTintColor: Platform.OS === "android" ? 'white' : Colors.primaryColor
    }
})

export default createAppContainer(MealsNavigator);