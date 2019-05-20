import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import debounce from 'lodash.debounce';

import ajax from '../services/ajax';

class SearchBar extends Component {

    state = {
        searchTerm: ''
    }

    debouncedSearchDeals = debounce(this.props.searchDeals, 3000);

    handleChange = (searchTerm) => {
        this.setState({searchTerm}, () => {
            // debounce ...
            this.debouncedSearchDeals(this.state.searchTerm);
        });
    }

    

    render() {
        console.log(this.state.searchTerm);
        return (
            <TextInput 
            placeholder="Search All Deals"
            onChangeText={this.handleChange}
            style={styles.input} />
        );
    }
}

SearchBar.propTypes = {
    searchDeals : PropTypes.func.isRequired
};

const styles = StyleSheet.create ({

    input: {
        height: 40,
        marginHorizontal: 12
    }

});

export default SearchBar;