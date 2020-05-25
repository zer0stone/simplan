//connect 불러오기 : component를 App.js의 tore에 연결하는 것을 도와준다.
import {connect} from 'react-redux';
import Timer from './presenter';

//store에서 state를 복사하는 function을 만듬
function mapStateToProps(state){        
    const {isPlaying, elapsedTime, timerDuration} = state;
    return{
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

export default connect(mapStateToProps)(Timer);
