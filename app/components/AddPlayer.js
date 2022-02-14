import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import Icon from './Icon';

function AddPlayer({ modal }) {

    const addPlayer = () => {

    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => modal(true)}>
                <Text>Add Player</Text>
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
        marginTop: 5,
        flexDirection: 'row'
    }
})

export default AddPlayer;