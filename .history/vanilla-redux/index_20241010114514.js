import { createStore } from 'redux';

// 수정할 DOM 노드를 가르키는 값을 미리 선언
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increse');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 정의 
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수 작성함
const toggleSwitch = () => ({type : TOGGLE_SWITCH});
const increase = difference => ({type : INCREASE, difference});
const decrease = () => ({type : DECREASE});

// 프로젝트에서 사용할 초기값 정의, 초기값의 형태는 자유 - 숫자, 문자열, 객체
const initialState = {
    toggl : false,
    counter : 0
};

// 리듀서 함수 정의, 리듀서는 변화를 일으키는 함수
// state가 undefined일 때는 initialState를 기본값으로 사용 
// 리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜야함 
function reducer(state = initialState, action) {
    // action.type에 따라 다른 작업 처리 
    switch(action.type) {
        case TOGGLE_SWITCH : 
            return {
                ...state, // 불변성 유지해야함
                toggle : !state.toggle
            };
        case INCREASE : 
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE : 
            return {
                ...state,
                counter : state.counter - 1
            };
        default :
            return state;
    }

}

// 스토어 정의
const store = createStore(reducer);

// render 함수 정의
const render = () => {
    const state = store.getState(); // 현재 상태 조회

    // 토글 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    // 카운터 처리
    counter.innerText = state.counter;
};

render();