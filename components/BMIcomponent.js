import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Keyboard } from 'react-native'
import { Input } from 'react-native-elements';

export class BMIcomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feet: '',
            inch: '',
            weight: '',
            bmi: ''
        }
        this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
        this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.resetInputs = this.resetInputs.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
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
                weight: '',
                feet: '',
                inch: ''
            }
        )
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
            console.log(bmi)
            return bmi
        }
    }


    // getBMIResults(bmi) {
    //     let bmiResults = {
    //         label: '',
    //         alertClass: '',
    //     };

    //     if (bmi <= 18.5) {
    //         bmiResults.label = 'Underweight';
    //         bmiResults.alertClass = 'alert-danger';
    //     }
    //     else if (bmi <= 24.9) {
    //         bmiResults.label = 'Normal weight';
    //         bmiResults.alertClass = 'alert-success';
    //     }
    //     else if (bmi <= 29.9) {
    //         bmiResults.label = 'Overweight';
    //         bmiResults.alertClass = 'alert-warning';
    //     }
    //     else if (bmi >= 30) {
    //         bmiResults.label = 'Obesity';
    //         bmiResults.alertClass = 'alert-danger';
    //     } else {
    //         bmiResults.label = 'BMI';
    //         bmiResults.alertClass = 'alert-primary';
    //     }

    //     return bmiResults;
    // }

    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        BMI Calculator
                    </Text>
                    <Text style={styles.subTitle}>
                        Enter Your Info
                    </Text>
                </View>
                <View style={styles.form} onBlur={Keyboard.dismiss}>
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
                        value={this.state.inches}
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
                    <TouchableOpacity onPress={() => this.calculateBMI} style={{ textAlign: 'center', alignSelf: 'center', margin: 10, padding: 20 }}>
                        <Text style={{ color: 'green', fontSize: 25, borderWidth: 3, borderColor: 'green', padding: 10, borderRadius: 15 }}>
                            Calculate
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <Text>Results:{this.state.bmi} </Text>
                    </View>
                </View>

            </View>
        )
    }
}

export default BMIcomponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900',
        color: 'salmon',
        textShadowColor: 'white',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },
    subTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '900',
        color: 'salmon',
        textShadowColor: 'white',
        textShadowOffset: {
            width: 3,
            height: 3
        },
        textShadowRadius: 10
    },
    form: {
        borderColor: 'salmon',
        borderWidth: 3,
        margin: 10,
        alignSelf: 'stretch',
        padding: 5
    }
}

)