//connect 불러오기 : component를 App.js의 tore에 연결하는 것을 도와준다.
import {connect} from 'react-redux';
import Timer from './presenter';
import InputTime from '../Input';
import {bindActionCreators} from "redux";
import {actionCreator as simplanAction } from '../../reducer.js';

//store에서 state를 복사하는 function을 만듬
function mapStateToProps(state){        
    const {isPlaying, elapsedTime, timerDuration} = state;
    return{
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

//dispatch = Action을 reducer로 보내주는 function이다.
//bindActionCreators는 dispatch와 action을 묶어준다.
function mapDispatchToProps(dispatch){
    return{
        startTimer : bindActionCreators(simplanAction.startTimer, dispatch),
        restartTimer : bindActionCreators(simplanAction.restartTimer, dispatch),
        addSecond : bindActionCreators(simplanAction.addSecond, dispatch),
        setTimePicker : bindActionCreators(simplanAction.setTimePicker, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
