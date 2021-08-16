import React, { Component } from 'react'
import { View, Text, StyleSheet, Keyboard, Button } from 'react-native'
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
        }
        this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
        this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.resetInputs = this.resetInputs.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
        this.setBmi = this.setBmi.bind(this)
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
                weight: '',
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
                            name='Inches'
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
    }
}

)