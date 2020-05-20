import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

    function Button({iconName, onPress1}){
        return( 
            // onPressOut : 클릭이 떼어질 때 실행(아이폰 버튼 대비)
            <TouchableOpacity onPressOut = {onPress1}>
                <FontAwesome name = {iconName} size = {80} color = {"white"}/>
            </TouchableOpacity>
        )
    }

    // props의 속성을 정해줌
    Button.PropTypes = {
        iconName : PropTypes.string.isRequired, //버튼 이름은 String이어야 함
        onPress : PropTypes.func.isRequired, //onPress는 function 이어야 함.
    }
export default Button;