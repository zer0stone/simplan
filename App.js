import React, { component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import CustomButton from './conponents/Button/CustomButton.js';
import SettingButton from './conponents/Button/CustomImg.js';
import Timer from './conponents/Timer'
import Button from "./conponents/Button";

export default function App() {
  // console.log('hi');  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.head}>
        <SettingButton
          iconName="settings"
          onPress1={() => alert('is setting')}>
        </SettingButton>
      </View>
      <View style={styles.timer}>
        <Timer />
      </View>
      <View style={styles.animation}>
        <Text>
          #6 installing Redux and React Redux
        </Text>
        <Text>
          % BAR
        </Text>
        <Button iconName="play" onPress1={() => alert("is play!!")} />
        <Button iconName="stop" onPress1={() => alert("is stop!!")} />
      </View>
      <View style={styles.nav}>
        <CustomButton
          title={'+'}
          onPress={() => alert('is addTimer')}
        ></CustomButton>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center', 좌우정렬
    // justifyContent: 'center', 수직정렬
  },
  head: {
    flex: 1.5,
    backgroundColor: '#ce0b24',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },

  timer: {
    flex: 2,
    // paddingLeft : 10,
    // backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  animation: {
    flex: 5,
    backgroundColor: '#ce0b24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flex: 1.5,
    backgroundColor: '#ce0b24',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
