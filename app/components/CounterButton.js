import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from './Icon';

function CounterButton({onPress, icon}) {
    return (
            <TouchableOpacity onPress={onPress}>
                <Icon name={icon} />
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default CounterButton;