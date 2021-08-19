import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import { Input } from "react-native-elements";
import DismissKeyboard from "./DismissKeyboard";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feet: 0,
      inch: 0,
      weight: 0,
      bmi: 0,
      modalVisible: false,
    };

    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
    this.setBmi = this.setBmi.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };
  handleHeightFeetChange(v) {
    this.setState({
      feet: v,
    });
  }

  handleHeightInchChange(v) {
    this.setState({
      inch: v,
    });
  }

  handleWeightChange(v) {
    this.setState({
      weight: v,
    });
  }

  resetInputs() {
    this.setState({
      feet: 0,
      inch: 0,
      weight: "",
    });
  }
  setBmi(number) {
    this.setState({ bmi: number });
  }

  calculateBMI() {
    if (this.state.weight && this.state.feet && this.state.inch) {
      // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
      const INCHES_IN_FEET = 12;

      let height = Number(this.state.feet);
      // convert feet to inches
      height *= INCHES_IN_FEET;
      // add the inches input field
      height += Number(this.state.inch);

      let weight = this.state.weight;

      let bmi = (weight / (height * height)) * 703;
      bmi = bmi.toFixed(2);

      this.setBmi(bmi);
      this.resetInputs();
      Keyboard.dismiss();
    }
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.mainContainer}>
        <DismissKeyboard>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>BMI</Text>
          </View>
        </DismissKeyboard>
        <View style={styles.form}>
          <Input
            style={{ color: "white" }}
            name="height"
            label="Height"
            placeholder="Feet"
            leftIcon={{
              type: "font-awesome",
              name: "arrows-v",
              color: "white",
            }}
            keyboardType="numeric"
            value={this.state.feet}
            onChangeText={(v) => this.handleHeightFeetChange(v)}
          />
          <Input
            style={{ color: "white" }}
            name="height"
            placeholder="Inches"
            leftIcon={{
              type: "font-awesome",
              name: "arrows-v",
              color: "white",
            }}
            keyboardType="numeric"
            value={this.state.inch}
            onChangeText={(v) => this.handleHeightInchChange(v)}
          />
          <Input
            style={{ color: "white" }}
            name="weight"
            label="Weight"
            placeholder="In pounds"
            leftIcon={{
              type: "font-awesome",
              name: "balance-scale",
              color: "white",
            }}
            keyboardType="numeric"
            value={this.state.weight}
            onChangeText={(v) => this.handleWeightChange(v)}
          />

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                this.setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalInfo}>
                    BMI below 18.5 = Underweight
                  </Text>
                  <Text style={styles.modalInfo}>
                    BMI 18.5 to 24.9 = Normal/Healthy range
                  </Text>
                  <Text style={styles.modalInfo}>
                    BMI 25 to 29.9 = Overweight
                  </Text>
                  <Text style={styles.modalInfo}>BMI 30 and Above = Obese</Text>
                  <Text style={{ fontSize: 10, padding: 10 }}>
                    According to the BMI weight status categories, anyone with a
                    BMI between 25 and 29.9 would be classified as overweight
                    and anyone with a BMI over 30 would be classified as obese.
                    However,
                    <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                      {" "}
                      athletes may have a high BMI because of increased
                      muscularity rather than increased body fatness. In
                      general, a person who has a high BMI is likely to have
                      body fatness and would be considered to be overweight or
                      obese, but this may not apply to athletes.
                    </Text>{" "}
                    A trained healthcare provider should perform appropriate
                    health assessments to evaluate an individual’s health status
                    and risks.
                  </Text>
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => this.setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.closeInfo}>Hide Info</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginBottom: 20,
                color: "white",
              }}
            >
              Results: {this.state.bmi}
            </Text>
          </View>

          <Button title="Calculate" onPress={() => this.calculateBMI()} />

          {this.state.bmi !== 0 ? (
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => this.setModalVisible(true)}
              >
                <Text style={styles.info}> Info</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}

export default Calculator;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "black",
    color: "#f194ff",
  },
  titleContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "#f194ff",
    textShadowColor: "black",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 10,
  },

  form: {
    borderColor: "#f194ff",
    borderWidth: 3,
    padding: 15,
    flex: 4,
  },
  info: {
    color: "#f194ff",
    textAlign: "center",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  closeInfo: {
    color: "#f194ff",
    textAlign: "center",
    marginHorizontal: 5,
  },
  button: {
    borderColor: "#f194ff",
    borderWidth: 2,
    backgroundColor: "black",
    width: 80,
    borderRadius: 10,
    alignSelf: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    color: "white",
  },
  modalVisible: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  modalInfo: {
    color: "black",
    textAlign: "center",
  },
});
