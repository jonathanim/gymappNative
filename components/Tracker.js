import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { Slider, Icon } from "react-native-elements";
import uuid from "react-uuid";
import List from "./List";
import DismissKeyboard from "./DismissKeyboard";

function Tracker() {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState("BenchPress");
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(8);
  const [id, setId] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = () => {
    const addExercise = {
      id: uuid(1),
      name,
      reps,
      sets,
      completed,
    };
    addItem(addExercise);
    reset();
  };

  function addItem(exercise) {
    setExercises([...exercises, exercise]);
  }

  const removeItem = (id) => {
    const removeItem = exercises.filter((ex) => ex.id !== id);
    setExercises(removeItem);
  };

  const reset = () => {
    setName(name);
    setSets(1);
    setReps(8);
    setCompleted(false);
  };

  const handleCompleted = (id) => {
    const index = exercises.findIndex((ex) => ex.id === id);
    const exercise = exercises.find((ex) => ex.id === id);
    const newExercises = [...exercises].map((ex, idx) => {
      if (idx === index) {
        exercise.completed = !exercise.completed;
      }
      return ex;
    });
    setExercises(newExercises);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <DismissKeyboard>
          <Text style={styles.title}>Tracker</Text>
        </DismissKeyboard>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          type="text"
          name="name"
          style={styles.input}
          placeholder="add an exercise"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Icon name="plus" type="font-awesome" color="white" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <Slider
          trackStyle={{
            height: 5,
          }}
          thumbStyle={{
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            backgroundColor: "white",
            borderRadius: 15,
            borderColor: "black",
            borderWidth: 3,
            padding: 3,
          }}
          thumbProps={{
            children: (
              <Icon
                name="arrows-alt-h"
                type="font-awesome-5"
                color="red"
                size={35}
              />
            ),
          }}
          value={sets}
          name="sets"
          minimumValue={1}
          maximumValue={20}
          onValueChange={(value) => setSets(Math.round(value))}
        />
        <Text style={styles.text}>Sets: {sets}</Text>
        <Slider
          thumbStyle={{
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
            backgroundColor: "white",
            borderRadius: 15,
            borderColor: "black",
            borderWidth: 3,
            padding: 3,
          }}
          thumbProps={{
            children: (
              <Icon
                name="arrows-alt-h"
                type="font-awesome-5"
                color="red"
                size={35}
              />
            ),
          }}
          name="reps"
          value={reps}
          minimumValue={1}
          maximumValue={100}
          onValueChange={(value) => setReps(Math.round(value))}
        />

        <Text style={styles.text}>Reps:{reps}</Text>
      </View>
      {exercises.length === 0 ? (
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text style={styles.temporaryText}>Add an exercise</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            padding: 10,
          }}
        >
          <FlatList
            data={exercises}
            renderItem={({ item }) => (
              <List
                item={item}
                handleCompleted={handleCompleted}
                removeItem={removeItem}
                setSelectedId={setSelectedId}
              />
            )}
            extraData={selectedId}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
}

export default Tracker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "aqua",
  },
  titleContainer: {
    marginTop: 40,
    flex: 1,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "#ffdf6c",
    textShadowColor: "black",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 10,
  },
  display: {
    flex: 1,
    marginTop: 80,
    textAlign: "center",
    borderWidth: 5,
    padding: 10,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#ffdf6c",
  },
  button: {
    height: 50,
    borderWidth: 3,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "black",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderWidth: 3,
    textAlign: "center",
    backgroundColor: "white",
    marginVertical: 10,
    width: "80%",
  },
  text: {
    color: "black",
    marginVertical: 10,
  },
  temporaryText: {
    color: "black",
    fontSize: 30,
    marginVertical: 10,
    textAlign: "center",
  },
});
