import React from 'react';
import { View, StyleSheet } from 'react-native';

import PlayerScore from './PlayerScore';
import AddPlayer from './AddPlayer';

function PlayerEditContainer({ player, setPlayer }) {
    return (
        <View style={styles.container}>
            {player ? <PlayerScore player={player} /> : null}
            {!player ? <AddPlayer setPlayer={setPlayer} /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default PlayerEditContainer;