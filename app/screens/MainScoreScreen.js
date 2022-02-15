import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import PlayerEditContainer from '../components/PlayerEditContainer';


function MainScoreScreen(props) {

    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerThree, setPlayerThree] = useState('');
    const [playerFour, setPlayerFour] = useState('');
    const [playerFive, setPlayerFive] = useState('');
    const [playerSix, setPlayerSix] = useState('');


    return (
        <SafeAreaView style={styles.container}>
            <PlayerEditContainer player={playerOne} setPlayer={setPlayerOne} />
            {playerOne || playerTwo ? <PlayerEditContainer player={playerTwo} setPlayer={setPlayerTwo} /> : null}
            {playerTwo || playerThree ? <PlayerEditContainer player={playerThree} setPlayer={setPlayerThree} /> : null}
            {playerThree || playerFour ? <PlayerEditContainer player={playerFour} setPlayer={setPlayerFour} /> : null}
            {playerFour || playerFive ? <PlayerEditContainer player={playerFive} setPlayer={setPlayerFive} /> : null}
            {playerFive || playerSix ? <PlayerEditContainer player={playerSix} setPlayer={setPlayerSix} /> : null}

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