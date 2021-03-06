import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, SafeAreaView, TextInput } from 'react-native';

import PlayerScore from './PlayerScore';
import AddPlayer from './AddPlayer';


function PlayerEditContainer({ player, setPlayer }) {

    const [visible, setVisible] = useState(false)

    return (
        <>
        <View style={styles.container}>
            {player ? <PlayerScore player={player} setPlayer={setPlayer}/> : null}
            {!player ? <AddPlayer modal={setVisible} /> : null}
        </View>
        <Modal visible={visible} animationType="slide">
            <SafeAreaView style={styles.modal}>
                <Button style={styles.done} title="done" onPress={() => setVisible(false)} />
                <TextInput style={styles.input} placeholder='Player Name' onChangeText={text => setPlayer(text)}/>

            </SafeAreaView>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    input: {
        paddingVertical: 20,
    }
})

export default PlayerEditContainer;