import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from './AppButton';

function PlayerScore({ backgroundColor, playerTitle}) {
    const [score, setScore] = useState(0)

    const handleAdd = () => {
        setScore(score + 1)
    }

    const handleSubtract = () => {
        if(score !== 0){
            setScore(score - 1)
        }
    }

    return (
        <View style={styles.container}>
            <AppButton name='minus' onPress={() => handleSubtract()}/>
            <View style={styles.playerContainer}>
                <Text>Player One</Text>
                <Text>{score}</Text>
            </View>
            <AppButton name='plus' onPress={() => handleAdd()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    playerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PlayerScore;