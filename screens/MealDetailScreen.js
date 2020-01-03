import React, { useEffect, useCallback } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';

const MealDetailScreen = props => {

  const availableMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = availableMeals.find(meal => (meal.id = mealId));

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    // props.navigation.setParams({
    //   mealTitle: selectedMeal.title
    // })
    props.navigation.setParams({toggleFav: toggleFavoriteHandler})
  }, [toggleFavoriteHandler])
  

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  // const selectedMeal = MEALS.find(meal => (meal.id = mealId));

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={toggleFavorite}/>
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
