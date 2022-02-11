import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList, SafeAreaView } from 'react-native';
import AddPlayer from '../components/AddPlayer';


import PlayerScore from '../components/PlayerScore';

const testPlayers = [
    {
        playerName: 'Josh',
        playerNumber: 1,
        color: 'blue'
    },
    {
        playerName: 'Arthur',
        playerNumber: 2,
        color: 'orange'
    },
    {
        playerName: 'Ethan',
        playerNumber: 3,
        color: 'pink'
    },
]

function MainScoreScreen(props) {

    const [players, setPlayers] = useState(testPlayers)

    const renderItem = ({item}) => <PlayerScore player={item.playerName} backgroundColor={item.color}/>

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={players}
                renderItem={renderItem} 
                keyExtractor={item => item.playerNumber}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%'
    }
})

export default MainScoreScreen;