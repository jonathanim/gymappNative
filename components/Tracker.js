
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import {
    View, TouchableOpacity, StyleSheet, TextInput, Text,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native'
import { Slider } from 'react-native-elements'
import { Icon } from 'react-native-elements';
import uuid from 'react-uuid'


function Tracker() {


    const [exercises, setExercises] = useState([]);
    const [name, setName] = useState('');
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(1);
    const [id, setId] = useState(1)
    const [selectedId, setSelectedId] = useState(null);
    const [completed, setCompleted] = useState(false);


    const handleSubmit = () => {
        const addExercise = {
            id: uuid(1),
            name,
            reps,
            sets,
            completed
        }
        addItem(addExercise)
        reset()
    }

    function addItem(exercise) {
        setExercises([...exercises, exercise])
    }

    const removeItem = (id) => {
        const removeItem = exercises.filter(ex => ex.id !== id)
        setExercises(removeItem)
    }

    const reset = () => {
        setName('');
        setSets(1);
        setReps(1);
        setCompleted(false)
    }

    const handleCompleted = (id) => {
        const index = exercises.findIndex((ex) => ex.id === id)
        const exercise = exercises.find((ex) => ex.id === id)
        const newExercises = [...exercises].map((ex, idx) => {
            if (idx === index) {
                exercise.completed = !exercise.completed
            }
            return ex
        })

        console.log(newExercises)
        setExercises(newExercises)
    }

    const Item = ({ item }) => (
        <TouchableOpacity key={id} onPress={() => setSelectedId(item.id)} style={[styles.item]}>
            <Text style={[styles.exercise, { textDecorationLine: item.completed ? 'line-through' : 'none' }, { color: item.completed ? 'green' : 'black', fontSize: item.completed ? 25 : 20 }]}>{item.name}</Text>
            <Text style={[styles.exercise, { textDecorationLine: item.completed ? 'line-through' : 'none' }, { color: item.completed ? 'green' : 'black', fontSize: item.completed ? 25 : 20 }]}>{item.sets}</Text>
            <Text style={[styles.exercise, { textDecorationLine: item.completed ? 'line-through' : 'none' }, { color: item.completed ? 'green' : 'black', fontSize: item.completed ? 25 : 20 }]}>{item.reps}</Text>
            <Icon name='check' color="green" size={50} onPress={() => handleCompleted(item.id)} />
            <Icon name='close' color="red" size={50} onPress={() => removeItem(item.id)} />
        </TouchableOpacity>
    );



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
                    onValueChange={value => setSets(Math.round(value))}
                />
                <Text style={styles.text}>Sets: {sets}</Text>
                <Slider
                    name="reps"
                    value={reps}
                    minimumValue={1}
                    maximumValue={100}
                    onValueChange={value => setReps(Math.round(value))}
                />
                <Text style={styles.text}>Reps:{reps}</Text>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => handleSubmit()}
                >
                    <Text style={styles.textBtn}>submit</Text>
                </TouchableOpacity>
                <View style={{ flex: 3 }}>
                    <Text style={{ textAlign: 'center', fontSize: 30 }}>Exercise Sets Reps</Text>
                    <FlatList
                        data={exercises}
                        renderItem={Item}
                        extraData={selectedId}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View >

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
    listItem: {
        flex: 1,
        padding: 10,
        borderColor: 'black',
        borderWidth: 4,
        margin: 5

    }, exercise: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        flexDirection: 'row',
        margin: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'auto',
        alignItems: 'center',
        borderWidth: 5,
        margin: 5,

    }

})