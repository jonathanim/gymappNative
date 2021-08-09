import React from 'react'
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native'


function Tracker() {
    return (
        <View style={styles.mainContainer}>
            <TextInput type="text" style={styles.input} placeholder="add an exercise" />
            <TextInput
                type="text" style={styles.input} placeholder="number of sets"
            />
            <TextInput
                type="text" style={styles.input} placeholder="number of reps"
            />
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.textBtn}>submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Tracker



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'aqua',

    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900',
        color: 'black',
        textShadowColor: 'white',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },
    display: {
        flex: 1,
        marginTop: 80,
        textAlign: 'center',
        borderWidth: 5,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#ffdf6c',
    },
    buttons: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#007cc7',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 15,
        margin: 10
    },
    controls: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn: {
        fontSize: 30,
        color: "white",
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 5,
        padding: 10,
        fontSize: 15,
        backgroundColor: 'white'
    },

})