import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


class CustomButton extends Component{
    // static defaultProps = {
    //     title : 'untitle',
    //     onPress : () => null,
    // }

    constructor(props){
        super(props);
    }


render(){
    return(
        <TouchableOpacity 
            style={styles.plusButton}
            onPress = {this.props.onPress}
        >
        <Text styles={styles.text15}>
            {this.props.title}
        </Text>
        </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    plusButton :{
        backgroundColor : 'red',      
        width : '30%',
        height :'50%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text15:{
    
    },
});

export default CustomButton;