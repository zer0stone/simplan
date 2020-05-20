import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";


class Timer extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.timeText}>Goal : 25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.timeText}>Set : 25:00</Text>
                </View>
            </View>
            );
        }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#ce0b24',
    },
    upper: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    lower: {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    timeText: {
        fontSize : 50,
        fontWeight : "100",
        color : "white",
    }
});

export default Timer