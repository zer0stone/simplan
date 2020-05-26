//reducer ducks 사용 방법 
//1. import : 불러오고


// 2. Action : 액션을 정의하고

const START_TIMER = 'START_TIMER';
const RESTART_TIMER ='RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';
const SET_TIME_PICKER = 'SET_TIME_PICKER';

//3. Action creator : 엑션 생성자를 정의 + dispatch가 바라봄

function startTimer(){
    return{
        type: START_TIMER
    };
}

function restartTimer(){
    return{
        type: RESTART_TIMER
    };
}

function addSecond(){
    return{
        type: ADD_SECOND
    };
}

function setTimePicker(){
    return{
        type: SET_TIME_PICKER
    };
}

//4. Reducer

const TIME_DURATION = 1500;
const initalState = { //초기값
    isPlaying : false,
    elapsedTime : 0,
    timerDuration : TIME_DURATION
}

function reducer(state = initalState, action){
    switch(action.type){
        case START_TIMER :
            return applystartTimer(state);
        case RESTART_TIMER :
            return applyrestartTimer(state);
        case ADD_SECOND :
            return applyAddSecond(state);
        case SET_TIME_PICKER :
            return applySetTime(state);
        default :
            return state; // case에 속하지 않은 값을 하고 있을 때, 불러와지는 값(위 초기값)

    }
}

//5. Reducer Function : 리듀서 정의 

function applystartTimer(state){
    return{
        ...state, // default state(initalState) 전체를 수정하지않고 overwrite 함
        isPlaying : true
    }
}

function applyrestartTimer(state){
    return{
        ...state, // 디폴트 state 전체를 수정하지않고 오버와이드 함
        isPlaying : false,
        elapsedTime : 0
    }
}

function applyAddSecond(state){
    if (state.elapsedTime > TIME_DURATION) {
        return{
            ...state,
            isPlaying : false
            
        }
    } else {
        return{
            ...state,
            elapsedTime : state.elapsedTime + 1
        }
    }
}

function applySetTime(state){
    return{
        ...state, 
        timerDuration : 0
    }
}
//6. export Action creators

const actionCreator = {
    startTimer,
    restartTimer,
    addSecond,
    setTimePicker
}


//7. export Reducer
export {actionCreator};

export default reducer;