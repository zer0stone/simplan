import React, { useState } from 'react';
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// 컴포넌트 : https://github.com/react-native-community/datetimepicker#style-optional-ios-only

const DatePicker = () => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');
    const [_time, set_time] = useState('00');
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        setInput(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };


    const showTimepicker = () => {
        showMode('time');  
    };

    // 시간 옵션 포멧 : https://reactgo.com/format-date-time-javascript/ 
    const timeFormatOptions = { hour:  "2-digit", minute: "2-digit" };
    const ok = () => {
        if (show === false) {
            setShow(true);
        } else {
            setShow(false);
            set_time(date.toLocaleTimeString(undefined, timeFormatOptions));
        }   
    };

    return (
        <View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Button onPress={ok} title="ok" />
            </View>
            <Text>Goal : {_time}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    mode="time"
                    value = { date } 
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    textColor="white"
                />
            )}
        </View>
    );
};

export default DatePicker;