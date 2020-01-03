import React, { Component } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    console.log(displayedMeals);
    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategories = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategories.title
    }
}

export default CategoryMealScreen;
