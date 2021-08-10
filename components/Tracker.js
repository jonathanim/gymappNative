
import React, { useState } from 'react'
import { FlatList } from 'react-native';
import {
    View, TouchableOpacity, StyleSheet, TextInput, Text,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native'
import { Slider } from 'react-native-elements'
import { Icon } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


function Tracker() {


    const [exercises, setExercises] = useState([{ name: 'example', sets: 2, reps: 10, completed: false }]);
    const [name, setName] = useState('');
    const [sets, setSets] = useState(1);
    const [reps, setReps] = useState(1);
    const [selectedId, setSelectedId] = useState(null);
    const [completed, setCompleted] = useState(false);


    const handleSubmit = () => {
        const addExercise = {
            name,
            reps,
            sets,
            completed
        }
        addItem(addExercise)
        console.log(exercises)
        reset()
    }
    function addItem(exercise) {
        setExercises([...exercises, exercise])
    }

    const removeItem = (item) => {
        const removeItem = exercises.filter(ex => ex.name !== item)
        setExercises(removeItem)
    }

    const reset = () => {
        setName('');
        setSets(1);
        setReps(1);
    }
    // function makeCompleted(exercise) {
    //     const completed = exercise['completed'] = !completed
    //     setExercises(...exercises, ...completed)
    // }

    const handleCompleted = (item) => {
        const completedExercise = exercises.filter((ex) => {
            return ex.name === item
        })
        // makeCompleted(completedExercise)

    }

    const Item = ({ item }) => (
        <TouchableOpacity key={item.name} onPress={() => setSelectedId(item.name), () => handleCompleted(item.name)} style={[styles.item]}>
            <Text style={[styles.exercise, { textDecorationLine: completed ? 'line-through' : 'none' }]}>{item.name}</Text>
            <Text style={[styles.exercise, { textDecorationLine: completed ? 'line-through' : 'none' }]}>{item.sets}</Text>
            <Text style={[styles.exercise, { textDecorationLine: completed ? 'line-through' : 'none' }]}>{item.reps}</Text>
            <Icon name='close' color="red" size={50} onPress={() => removeItem(item.name)} />
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
                    <FlatList
                        data={exercises}
                        renderItem={Item}
                        extraData={selectedId}
                        keyExtractor={item => item.name}
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
        fontSize: 20,
        flexDirection: 'row',
        margin: 20,
        textDecorationLine: 'none'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'auto',
        alignItems: 'center',
        borderWidth: 5,
        margin: 5,

    }, line: {
        textDecorationLine: 'line-through'
    }

})