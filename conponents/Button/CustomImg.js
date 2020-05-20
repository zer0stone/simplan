import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from '@expo/vector-icons'; 

    function SettingButton({iconName, onPress1}){
        return( 
            // onPressOut : 클릭이 떼어질 때 실행(아이폰 버튼 대비)
            <TouchableOpacity onPressOut = {onPress1}>
                <Octicons 
                name = {iconName} 
                size = {24} 
                color = {"white"}
                style = {styles.settingIcon}/>
            </TouchableOpacity>
        )
    }

    const styles = StyleSheet.create({
        settingIcon : {
            marginRight : 10,
        }
    }        
    )
    // props의 속성을 정해줌
    SettingButton.PropTypes = {
        iconName : PropTypes.string.isRequired, //버튼 이름은 String이어야 함
        onPress : PropTypes.func.isRequired, //onPress는 function 이어야 함.
    }




export default SettingButton;