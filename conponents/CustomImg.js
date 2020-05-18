import React, {Component} from 'react';
import { StyleSheet,View ,Text,TouchableOpacity } from 'react-native';

class CustomImg extends Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <View style={styles.settingIcon1}> 
        <TouchableOpacity>
            <Text onPress={this.props.onPress}>
                img1
            </Text>        
        </TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    settingIcon1:{
        width : '15%',
        height :'50%',
        backgroundColor : '#8C533E',
        marginRight : 10,
        justifyContent: 'center',        
        alignItems: 'center',
        backgroundColor : 'red',         
        borderRadius: 100,
    },
    // settingIcon2:{
    //     width : '85%',
    //     backgroundColor : 'gray',
    //     paddingRight : 10,
    //     justifyContent: 'center',
    //     alignItems : 'flex-end'
    // },
});

export default CustomImg;