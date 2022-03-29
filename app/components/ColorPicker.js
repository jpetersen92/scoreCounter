import React from 'react';
import { View, StyleSheet } from 'react-native';

function ColorPicker(props) {
    return (
        <View style={styles.container}>
            <View style={styles.colorContainer} id='red'></View>
            <View style={styles.colorContainer} id='blue'></View>
            <View style={styles.colorContainer} id='green'></View>
            <View style={styles.colorContainer} id='purple'></View>
            <View style={styles.colorContainer} id='yellow'></View>
            <View style={styles.colorContainer} id='pink'></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    colorContainer: {

    }
})

export default ColorPicker;