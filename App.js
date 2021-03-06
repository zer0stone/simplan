import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CustomButton from './conponents/Button/CustomButton.js';
import SettingButton from './conponents/Button/CustomImg.js';
import Timer from './conponents/Timer';
import Button from "./conponents/Button";
import reducer from "./reducer"; //reducer.js에서 export한 function reducer을 불러옴
import { createStore } from "redux";
import { Provider } from "react-redux"; //state를 복사해오기 위해 Provider을 사용

let store = createStore(reducer);
// console.log(store.getState());

export default function App() {

  return (
    // Provider = 아래 component에 store를 복사할 수 있게 해줌
    <Provider store={store}>
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
        <View style={styles.nav}>
          <CustomButton
            title={'+'}
            onPress={() => alert('is addTimer')}
          ></CustomButton>
        </View>

      </View>
    </Provider>
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
    flex: 1,
    backgroundColor: '#ce0b24',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },

  timer: {
    flex: 5,
    // paddingLeft : 10,
    // backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  nav: {
    flex: 1,
    backgroundColor: '#ce0b24',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
