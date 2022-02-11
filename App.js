import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';


import MainScoreScreen from './app/screens/MainScoreScreen';
import PlayerEditScreen from './app/screens/PlayerEditScreen';



export default function App() {

  const [player, setPlayer] = useState('')


  return (
    <View style={styles.container}>
      {/* <MainScoreScreen /> */}
      <PlayerEditScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    height: 300,
    width: 300,
    backgroundColor: '#000'
  }
});
