import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Icon from './Icon';

function AddPlayer(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log("Pressed")}>
                <Icon name='plus' />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
})

export default AddPlayer;