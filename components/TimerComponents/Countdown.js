import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Alert } from 'react-native';

export default class CountDown extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
            }
        }, 10);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };

    adjustTimer = input => {
        const { timerTime, timerOn } = this.state;
        const max = 216000000;
        if (!timerOn) {
            if (input === "incHours" && timerTime + 3600000 < max) {
                this.setState({ timerTime: timerTime + 3600000 });
            } else if (input === "decHours" && timerTime - 3600000 >= 0) {
                this.setState({ timerTime: timerTime - 3600000 });
            } else if (input === "incMinutes" && timerTime + 60000 < max) {
                this.setState({ timerTime: timerTime + 60000 });
            } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
                this.setState({ timerTime: timerTime - 60000 });
            } else if (input === "incSeconds" && timerTime + 1000 < max) {
                this.setState({ timerTime: timerTime + 1000 });
            } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
                this.setState({ timerTime: timerTime - 1000 });
            }
        }
    };

    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
        return (

            <View style={styles.mainContainer} >
                <View style={styles.display}>
                    <Text style={styles.text}> {hours} : {minutes} : {seconds}</Text>
                </View>
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.adjustTimer("incHours")}><Text style={styles.textBtn}>+ Hours</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.adjustTimer("incMinutes")}><Text style={styles.textBtn}>+ Minutes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.adjustTimer("incSeconds")}><Text style={styles.textBtn}>+ Seconds</Text></TouchableOpacity>

                </View>
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.adjustTimer("decHours")}><Text style={styles.textBtn}>- Hours</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.adjustTimer("decMinutes")}><Text style={styles.textBtn}>- Minutes</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.adjustTimer("decSeconds")}><Text style={styles.textBtn}>- Seconds</Text></TouchableOpacity>
                </View>

                <View style={styles.controls}>
                    {timerOn === false &&
                        (timerStart === 0 || timerTime === timerStart) && (
                            <TouchableOpacity style={styles.buttons}
                                onPress={this.startTimer}><Text style={styles.textBtn}>Start</Text></TouchableOpacity>
                        )}
                    {timerOn === true && timerTime >= 1000 && (
                        <TouchableOpacity style={styles.buttons}
                            onPress={this.stopTimer}><Text style={styles.textBtn}>Stop</Text></TouchableOpacity>
                    )}
                    {timerOn === false &&
                        (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                            <TouchableOpacity style={styles.buttons}
                                onPress={this.startTimer}><Text style={styles.textBtn}>Resume</Text></TouchableOpacity>
                        )}
                    {(timerOn === false || timerTime < 1000) &&
                        (timerStart !== timerTime && timerStart > 0) && (
                            <TouchableOpacity style={styles.buttons}
                                onPress={this.resetTimer}><Text style={styles.textBtn}>Reset</Text></TouchableOpacity>
                        )}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#f75990',

    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '900',
        color: 'black',
        textShadowColor: 'white',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 10
    },
    display: {
        flex: 1,
        marginTop: 80,
        textAlign: 'center',
        borderWidth: 5,
        padding: 20,
        justifyContent: 'center',
        borderRadius: 15
    },
    buttons: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: 'aqua',
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
        fontSize: 15,
        padding: 10,
    }
})