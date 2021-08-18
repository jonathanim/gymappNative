import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function List({
  item,
  handleCompleted,
  removeItem,
  setSelectedId,
}) {
  return (
    <View
      key={item.id}
      onPress={() => setSelectedId(item.id)}
      style={styles.item}
    >
      <View style={{ flex: 1 }}>
        <Text style={item.completed ? styles.complete : styles.normal}>
          {item.name}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={item.completed ? styles.complete : styles.normal}>
          Sets:{item.sets}
        </Text>
        <Text style={item.completed ? styles.complete : styles.normal}>
          Reps:{item.reps}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Icon
          name="check"
          color="green"
          size={50}
          onPress={() => handleCompleted(item.id)}
        />
        <Icon
          name="close"
          color="red"
          size={50}
          onPress={() => removeItem(item.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderWidth: 2,
    padding: 5,
    alignItems: "center",
    marginTop: 3,
  },
  normal: {
    color: "black",
    fontSize: 15,
    margin: 5,
  },
  complete: {
    color: "red",
    fontSize: 15,
    margin: 5,
    textDecorationLine: "line-through",
  },
});
