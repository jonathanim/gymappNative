import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Timer() {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>Timer Utilities</Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity style={styles.btn1} >
                    <Text style={styles.text}>StopWatch</Text>
                </TouchableOpacity >

                <TouchableOpacity style={styles.btn2} >
                    <Text style={styles.text}>Countdown</Text>
                </TouchableOpacity >
            </View>
        </View>
    )
}

export default Timer


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#eefbfb',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn1: {
        borderColor: '#203647',
        borderWidth: 5,
        backgroundColor: '#4da8da',
        padding: 20,
        borderRadius: 100 / 50,
        margin: 10
    },
    btn2: {
        borderColor: '#203647',
        borderWidth: 5,
        backgroundColor: '#4da8da',
        padding: 20,
        borderRadius: 100 / 40,
        margin: 10
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    }

});