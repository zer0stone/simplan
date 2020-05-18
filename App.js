import React, {component} from 'react';
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from './conponents/CustomButton.js';
import CustomImg from './conponents/CustomImg.js';

export default function App() {
  return (
    <View style={styles.container}>

      <View style = {styles.head}>
        <CustomImg
        onPress = {()=> alert('설정 이미지')}>          
        </CustomImg>
      </View>
      <View style = {styles.title}>
        <Text>
          연주와 약속 : 21:38 PM
        </Text>
        <Text>
          남은 시간 : 00:40
        </Text>
        <Text>
          설정 시간 : 01:20
        </Text>
      </View>
      <View style = {styles.time}>
        <Text>
          % BAR
        </Text>
        <Text>
          STRATE IMG
        </Text>
      </View>
      <View style = {styles.nav}>
        <CustomButton 
          title={'hi'}
          onPress ={() => alert('시간 추가 버튼')}
        ></CustomButton>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center', 수직정렬
    // justifyContent: 'center', 좌우정렬
  },
  head:{
    flex: 1.5,
    backgroundColor: '#F2BE22',
    flexDirection : 'row',    
    alignItems: 'center',
    justifyContent : 'flex-end',
    
  },
    
  title:{
    flex: 2,
    paddingLeft : 10,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
  },
  time:{
    flex : 5,
    backgroundColor : '#F2B28D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav:{
    flex:1.5,
    backgroundColor : '#8C533E',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight : 10,
  },    
});
