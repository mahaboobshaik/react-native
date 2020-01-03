import React from "react";

import { Platform, Text } from "react-native";
import Colors from "../constants/Colors";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    haderBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  {
    // mode: 'modal',
    // initialRouteName: "Categories",
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const FavNavigtor = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
  // mode: 'modal',
  // initialRouteName: "Categories",
  defaultNavigationOptions: defaultNavigationOptions
});

const tabsScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
    }
  },
  Favorites: {
    screen: FavNavigtor,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === "android" ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
    }
  }
};

const MealsFavTabNavigator =
    Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabsScreenConfig, {
        activeTintColor: 'white', //Colors.accentColor,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabsScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
          activeTintColor: Colors.accentColor
        }
    });

const FiltersNavigator = createStackNavigator({
    Fitlers: FiltersScreen
},
{
  // mode: 'modal',
  // initialRouteName: "Categories",
//   navigationOptions: {
//     drawerLabel: 'Filters!!!'
//   },
  defaultNavigationOptions: defaultNavigationOptions
})

const MainNavigator = createDrawerNavigator({
    MealFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: "Meals"
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
