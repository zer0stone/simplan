import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

class Timer extends Component {

    render() {
        // console.log(this.props); //Timer/index.js 에서 connect를 통해 전달됨
        const {isPlaying, elapsedTime, timerDuration} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.timeText}>Goal : 26:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.timeText}>Set : 25:00</Text>
                </View>

                <View style={styles.animation}>
                    {!isPlaying ?
                    <Button iconName="play" onPress1={() => alert("is play!!")} />
                    : null}
                    {isPlaying && (
                    <Button iconName="stop" onPress1={() => alert("is stop!!")} />
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    upper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 50,
        fontWeight: "100",
        color: "white",
    },
    animation: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Timer;