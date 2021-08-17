import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity, Button, Alert } from 'react-native'
import { Input } from 'react-native-elements';
import DismissKeyboard from './DismissKeyboard';
export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feet: 0,
            inch: 0,
            weight: '',
            bmi: 0,
            modalVisible: false
        }
        this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
        this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.resetInputs = this.resetInputs.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
        this.setBmi = this.setBmi.bind(this)
        this.setModalVisible = this.setModalVisible.bind(this)
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    handleHeightFeetChange(v) {
        this.setState({
            feet: v
        });
    }

    handleHeightInchChange(v) {
        this.setState({
            inch: v
        });
    }

    handleWeightChange(v) {
        this.setState({
            weight: v
        });
    }

    resetInputs() {
        this.setState(
            {
                feet: 0,
                inch: 0,
                weight: 0,
            }
        )
    }
    setBmi(number) {
        this.setState({ bmi: number })
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

            this.setBmi(bmi)
            this.resetInputs()
        }
    }


    render() {
        const { modalVisible } = this.state;
        return (
            <DismissKeyboard>
                <View style={styles.mainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            BMI
                        </Text>
                    </View>
                    <View style={styles.form}>
                        <Input
                            name='height'
                            label='Height'
                            placeholder='Feet'
                            leftIcon={{ type: 'font-awesome', name: 'arrows-v' }}
                            keyboardType='numeric'
                            value={this.state.feet}
                            onChangeText={(v) => this.handleHeightFeetChange(v)}
                        />
                        <Input
                            name='height'
                            placeholder='Inches'
                            leftIcon={{ type: 'font-awesome', name: 'arrows-v' }}
                            keyboardType='numeric'
                            value={this.state.inch}
                            onChangeText={(v) => this.handleHeightInchChange(v)}
                        />
                        <Input
                            name='weight'
                            label="Weight"
                            placeholder='In pounds'
                            leftIcon={{ type: 'font-awesome', name: 'balance-scale' }}
                            keyboardType='numeric'
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
                                        <Text style={styles.modalInfo}>BMI below 18.5 = Underweight</Text>
                                        <Text style={styles.modalInfo}>BMI 18.5 to 24.9 = Normal/Healthy range</Text>
                                        <Text style={styles.modalInfo}>BMI 25 to 29.9 = Overweight</Text>
                                        <Text style={styles.modalInfo}>BMI 30 and Above = Obese</Text>
                                        <Text style={{ fontSize: 10, padding: 10 }}>According to the BMI weight status categories, anyone with a BMI between 25 and 29.9 would be classified as overweight and anyone with a BMI over 30 would be classified as obese.

                                            However,<Text style={{ fontWeight: 'bold', fontSize: 12 }}> athletes may have a high BMI because of increased muscularity rather than increased body fatness. In general, a person who has a high BMI is likely to have body fatness and would be considered to be overweight or obese, but this may not apply to athletes.</Text> A trained healthcare provider should perform appropriate health assessments to evaluate an individual’s health status and risks.</Text>
                                        <TouchableOpacity
                                            style={[styles.button]}
                                            onPress={() => this.setModalVisible(!modalVisible)}
                                        >
                                            <Text style={styles.closeInfo}>Hide Info</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => this.setModalVisible(true)}
                            >
                                <Text style={styles.info}> Info</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Results:{this.state.bmi} </Text>
                        </View>
                        <Button title="Calculate" onPress={() => this.calculateBMI()} />
                    </View>

                </View >
            </DismissKeyboard>
        )
    }
}

export default Calculator

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'aqua',

    },
    titleContainer: {
        marginTop: 40
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffdf6c',
        textShadowColor: 'black',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },

    form: {
        borderColor: '#0275d8',
        borderWidth: 3,
        padding: 15
    },
    info: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 5,
        marginVertical: 10
    },
    closeInfo: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 5
    },
    button: {
        borderBottomColor: 'black',
        borderWidth: 2,
        backgroundColor: 'black'
    },
    centeredView: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
        color: 'white'
    },
    modalVisible: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }, modalInfo: {
        color: 'black', textAlign: 'center'
    }

}

)