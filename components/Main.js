
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Timer from './Timer'
function Main({ navigation }) {
    return (

        <View style={styles.mainContainer}>

            <TouchableOpacity
                style={styles.timerView}
                onPress={() => navigation.navigate('Timer')}
            >
                <Text style={styles.title} >Timer</Text>
            </TouchableOpacity >


            <TouchableOpacity style={styles.videosView} >
                <Text style={styles.title}>Videos</Text>
            </TouchableOpacity >


            <TouchableOpacity style={styles.trackingView} >
                <Text style={styles.title}>Tracking</Text>
            </TouchableOpacity >

        </View >
    )
}

export default Main


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
    },
    timerView: {
        flex: 2,
        backgroundColor: '#007cc7',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 100 / 15,
        borderWidth: 10,
        margin: 5

    },
    videosView: {
        flex: 2,
        backgroundColor: '#ffdf6c',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: 'black',
        borderRadius: 100 / 15,
        borderWidth: 10,
        margin: 5
    },
    trackingView: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 2,
        backgroundColor: '#f75990',
        borderColor: 'black',
        borderRadius: 100 / 15,
        borderWidth: 10,
        margin: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold'
    }
})