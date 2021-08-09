
import React, { useState } from 'react'
import {
    View, TouchableOpacity, StyleSheet, TextInput, Text, ScrollView,
    TouchableWithoutFeedback, Keyboard, FlatList
} from 'react-native'
import { Slider } from 'react-native-elements'


function Tracker() {

    const [exercises, setExercises] = useState([]);
    const [exercise, setExercise] = useState({})
    const [name, setName] = useState('');
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);

    const handleSubmit = () => {
        setExercise({
            name: name,
            sets: sets,
            reps: reps
        })
        setExercises([...exercises, exercise])

        reset()
    }
    const reset = () => {
        setName('');
        setSets(0);
        setReps(0);
    }

    const renderExercise = (item) => (
        <View key={item.name} style={styles.listItem}>
            <Text style={{ color: 'white' }}>
                {item.name}
            </Text>
            <Text style={{ color: 'white' }}>
                {item.sets}
            </Text>
        </View>
    )

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.mainContainer}>
                <Text style={styles.text}>Exercise: {name}</Text>
                <TextInput
                    type="text"
                    name='name'
                    style={styles.input}
                    placeholder="add an exercise"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <Slider
                    value={sets}
                    name="sets"
                    minimumValue={1}
                    maximumValue={20}
                    onSlidingComplete={value => setSets(Math.round(value))}
                />
                <Text style={styles.text}>Sets: {sets}</Text>
                <Slider
                    name="reps"
                    value={reps}
                    minimumValue={1}
                    maximumValue={100}
                    onSlidingComplete={value => setReps(Math.round(value))}
                />
                <Text style={styles.text}>Reps:{reps}</Text>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => handleSubmit()}
                >
                    <Text style={styles.textBtn}>submit</Text>
                </TouchableOpacity>
                <ScrollView>
                    {exercises}
                </ScrollView>
            </View>

        </TouchableWithoutFeedback >
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
    exercisesBox: {
        flex: 2,
        borderWidth: 5,
        height: 'auto'
    },
    listItem: {
        padding: 10,
        backgroundColor: 'purple',

    }

})