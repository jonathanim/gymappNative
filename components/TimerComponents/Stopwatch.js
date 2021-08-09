import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        }
    }
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };


    render() {

        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <View style={styles.mainContainer}>
                <View style={styles.display} >
                    <Text style={styles.text}>
                        {hours} : {minutes} : {seconds} : {centiseconds}
                    </Text>
                </View>
                <View style={styles.controls}>
                    {this.state.timerOn === false && this.state.timerTime === 0 && (
                        <TouchableOpacity style={styles.buttons} onPress={this.startTimer}>
                            <Text style={styles.textBtn}>start</Text>
                        </TouchableOpacity>
                    )
                    }
                    {this.state.timerOn === true && (
                        <TouchableOpacity style={styles.buttons} onPress={this.stopTimer}>
                            <Text style={styles.textBtn}>Stop</Text>
                        </TouchableOpacity>
                    )
                    }
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <TouchableOpacity style={styles.buttons} onPress={this.startTimer}>
                            <Text style={styles.textBtn}>Resume</Text>
                        </TouchableOpacity>

                    )
                    }
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <TouchableOpacity style={styles.buttons} onPress={this.resetTimer}>
                            <Text style={styles.textBtn}>Reset</Text>
                        </TouchableOpacity>
                    )
                    }
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#007cc7',

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
        backgroundColor: '#ffdf6c',
        paddingHorizontal: 50,
        paddingVertical: 50,
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
        fontSize: 25,
        color: "black"
    }
})