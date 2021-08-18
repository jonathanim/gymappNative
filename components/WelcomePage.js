import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Quotes from "./Quotes";

function WelcomePage() {
  const [dt, setDt] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Quotes />
      <Text style={styles.title}>Welcome</Text>
      <Icon name="today" size={100} color="#f75990" />
      <Text style={styles.text}>{dt}</Text>
    </View>
  );
}

export default WelcomePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffdf6c",
  },
  text: {
    fontSize: 35,
    marginTop: 20,
    textAlign: "center",
    color: "#f75990",
    textShadowColor: "black",
    textShadowOffset: {
      width: 3,
      height: 1,
    },
    textShadowRadius: 4,
  },
  title: {
    fontSize: 40,
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "900",
    color: "black",
    textShadowColor: "#f75990",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 10,
  },
});
