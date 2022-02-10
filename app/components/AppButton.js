import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from './Icon';

function AppButton({ name, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name={name} size={80}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: 75
    },
    text: {

    }
})

export default AppButton;