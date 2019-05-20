import React, { Component } from 'react';
import { View, Text, Animated, Easing, Dimensions, StyleSheet } from 'react-native';

import DealList from './dealList';
import DealDetails from './dealDetails';
import SearchBar from './searchBar';

import ajax from '../services/ajax';

class Main extends Component {

    titleXPos = new Animated.Value(0);

    state = {
        deals: [],
        dealsFromSearch: [],
        currentDealId: null,
    }

    async componentDidMount(){
        this.animateTitle();
        const deals = await ajax.fetchInitialDeals();
        this.setState({deals});
    }

    animateTitle = (direction = 1) => {
        const width = Dimensions.get("window").width - 150;

        Animated.timing(
            this.titleXPos,
            { 
                toValue: direction * width/2, 
                duration: 1000, 
                easing: Easing.ease }
        ).start(({ finished }) => {
            if(finished)
                this.animateTitle(-1*direction);
        });
    }

    searchDeals = async (searchTerm) => {

        let dealsFromSearch = [];
        if(searchTerm){
            dealsFromSearch = await ajax.fetchDealsSearchResults(searchTerm);
        }
        this.setState({dealsFromSearch});
    }

    setCurrentDeal = (dealId) => {
        this.setState({currentDealId : dealId});
    }

    unsetCurrentDeal = (dealId) => {
        this.setState({currentDealId : null});
    }

    currentDeal = () => {
        return this.state.deals.find(
            ( deal ) => deal.key === this.state.currentDealId
        );
    }

    render(){
        console.log(this.state.deals);
        if(this.state.currentDealId){
            return (
                <View style={styles.main}>
                    <DealDetails initialDealData={this.currentDeal()} onBack={this.unsetCurrentDeal} />
                </View>
            )
        }

        const dealsToDisplay = this.state.dealsFromSearch.length > 0 ? this.state.dealsFromSearch : this.state.deals;

        if(dealsToDisplay.length > 0)
            return <View style={styles.main}>
                        <SearchBar searchDeals={this.searchDeals}/>
                        <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal}/>
                    </View>
        return (
            <Animated.View style={[{ left: this.titleXPos }, styles.container]}>
                <Text style={styles.header}>Bakesale</Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create ({

    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    main : {
        marginTop: 30
    },

    header : {
        fontSize : 40
    }

});

export default Main;