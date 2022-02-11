import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik'
import AppButton from '../components/AppButton';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    playerName: Yup.string().required().label('Player Name'),
    playerNumber: Yup.number().required().max(10).positive().label('Player Number')
})


function PlayerEditScreen(props) {


    return (
        <SafeAreaView>
            <Formik
                initialValues={{
                    playerName: '',
                    playerNumber: ''
                }}
                onSubmit={values => console.log(values)}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <TextInput placeholder='Enter Player Name' onChangeText={handleChange('playerName')} onBlur={() => setFieldTouched('PlayerName')}/>
                        {touched.playerName && <Text>{errors.playerName}</Text>}
                        <TextInput keyboardType='numeric' placeholder='Player Number' onChange={handleChange('playerNumber')} onBlur={() => setFieldTouched('PlayerNumber')}/>
                        {<Text>{errors.playerNumber}</Text>}
                        <AppButton title='Add Player' onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {}
})

export default PlayerEditScreen;