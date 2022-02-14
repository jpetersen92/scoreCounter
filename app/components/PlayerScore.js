import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Swipeable  from 'react-native-gesture-handler/Swipeable';

import CounterButton from './CounterButton';
import Icon from './Icon';



function PlayerScore({ backgroundColor = 'green', player, setPlayer }) {
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
        <Swipeable renderRightActions={() => 
            <TouchableWithoutFeedback onPress={() => setPlayer('')}>
                <View style={styles.delete}>
                    <Icon name='trash-can' />
                </View>
            </TouchableWithoutFeedback>
        }>
            <View style={[styles.container, {backgroundColor}]}>
                <CounterButton onPress={() => handleSubtract()} icon='minus'/>
                <View style={styles.playerContainer}>
                    <Text>{player}</Text>
                    <Text>{score}</Text>
                </View>
                <CounterButton onPress={() => handleAdd()} icon='plus'/>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    playerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    delete: {
        backgroundColor: 'red',
        width: 70,
        height: 80,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PlayerScore;