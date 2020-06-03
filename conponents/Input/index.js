// import React, { Component } from "react";
// import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
// import TimePicker from "react-native-24h-timepicker";

// class InputTime extends Component {
    
//     constructor() {
//         super();
//         this.state = {
//             time: ""
//         };
//     }

//     onCancel() {
//         this.TimePicker.close();
//     }

//     onConfirm(hour, minute) {
//         var convertTime = (`${hour}:${minute}`);
//         var parts = convertTime.split(':'),
//             _hour = +parts[0],
//             _minute = +parts[1];
//         // var test = Math.round((((minutes * 60 ) / 0.016667)+ (seconds / 0.016667)));
//         var setTime = Math.round((((_hour * 60 ) + _minute) / 0.016667));
//         this.setState({ time: `${setTime}` });
//         this.TimePicker.close();
//     }
    

//     render() {
//         const { settingTime } = this.props;
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity
//                     onPress={() => this.TimePicker.open()}
//                     style={styles.button}
//                 >
//                     <Text style={styles.buttonText}>TIMEPICKER</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.text}>{this.state.time}</Text>
//                 <TimePicker
//                     ref={ref => {
//                         this.TimePicker = ref;
//                     }}
//                     onCancel={() => this.onCancel()}
//                     onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
//                     minuteInterval = {5}
//                     minuteUnit ={" 분"}
//                     hourUnit = {" 시간"}
//                     selectedHour = {"0"}
//                     selectedMinute = {"00"}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//     },
//     text: {
//     },
//     button: {
//     },
//     buttonText: {
//     }
// });

// export default InputTime;