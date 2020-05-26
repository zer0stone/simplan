import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";
import InputTime from "../Input";

function formatTime (time){
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {

    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        // console.log(`현재 값 : ${currentProps.isPlaying} 다음 값 : ${nextProps.isPlaying}`);
        if (!currentProps.isPlaying && nextProps.isPlaying) {
            // console.log('시작해야 함');
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000); 
            //아래 timerInterval을 쓰기 위해 state 저장           
            this.setState({
                timerInterval
            });
        } else if(currentProps.isPlaying && !nextProps.isPlaying){
            // console.log('중지해야 함');
            clearInterval(this.state.timerInterval);
        }
    }

    render() {
        console.log(this.props); //Timer/index.js 에서 connect를 통해 전달됨
        const { isPlaying, elapsedTime, timerDuration, startTimer, addSecond, restartTimer, setTimePicker } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.timeText}>Goal : 25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.timeText}>Set : {formatTime(timerDuration - elapsedTime)}</Text>
                </View>

                <View style={styles.animation}>
                    {!isPlaying ?
                        <Button iconName="play" onPress1={startTimer} />
                        : null}
                    {isPlaying && (
                        <Button iconName="stop" onPress1={restartTimer} />
                    )}
                    <Button iconName="star" onPress1={setTimePicker} />
                    <InputTime/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ce0b24',
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
        flex: 5,
        backgroundColor: '#ce0b24',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Timer;