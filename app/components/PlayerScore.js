import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import CounterButton from './CounterButton';



function PlayerScore({ backgroundColor = 'red', player}) {
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
        <View style={[styles.container, {backgroundColor}]}>
            <CounterButton onPress={() => handleSubtract()} icon='minus'/>
            <View style={styles.playerContainer}>
                <Text>{player}</Text>
                <Text>{score}</Text>
            </View>
            <CounterButton onPress={() => handleAdd()} icon='plus'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 10
    },
    playerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PlayerScore;