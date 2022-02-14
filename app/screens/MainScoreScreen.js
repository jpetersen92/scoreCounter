import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AddPlayer from '../components/AddPlayer';
import PlayerEditContainer from '../components/PlayerEditContainer';


import PlayerScore from '../components/PlayerScore';

function MainScoreScreen(props) {

    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [playerThree, setPlayerThree] = useState('');
    const [playerFour, setPlayerFour] = useState('');
    const [playerFive, setPlayerFive] = useState('');
    const [playerSix, setPlayerSix] = useState('');


    const renderItem = ({item}) => <PlayerScore player={item.playerName} backgroundColor={item.color}/>

    return (
        <SafeAreaView style={styles.container}>
            <PlayerEditContainer player={playerOne} setPlayer={setPlayerOne} />
            {playerOne || playerTwo ? <PlayerEditContainer player={playerTwo} setPlayer={setPlayerTwo} /> : null}
            {playerTwo ? <PlayerEditContainer player={playerThree} setPlayer={setPlayerThree} /> : null}
            {playerThree ? <PlayerEditContainer player={playerFour} setPlayer={setPlayerFour} /> : null}
            {playerFour ? <PlayerEditContainer player={playerFive} setPlayer={setPlayerFive} /> : null}
            {playerFive ? <PlayerEditContainer player={playerSix} setPlayer={setPlayerSix} /> : null}

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