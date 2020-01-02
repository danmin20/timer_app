import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }){
    return(
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome style={styles.button} name={iconName} size={80}/>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    button: {
        marginHorizontal:10,
        color: "white"
    }
})

export default Button;