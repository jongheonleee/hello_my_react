import { type } from "@testing-library/user-event/dist/type";

// 1. 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT' // 인풋 값을 변경함
const INSERT = 'todos/INSERT' // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE' // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE' // todo를 제거함

// 2. 액션 생성 함수 만들기
export const changeInput = input => ({
    type : CHANGE_INPUT,
    input
});

let id = 3; // insert가 호출될 때마다 1씩 더해짐
export const insert = text => ({
    type : INSERT,
    todo : {
        id : id++,
        text,
        done : false
    }
});

export const toggle = id =>  ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
});

// 3. 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input : '',
    todos : [
        {
            id : 1,
            text : '리덕스 기초 배우기',
            done : true
        }, 
        {
            id : 2,
            text : 'React Hooks 사용하기',
            done : false
        }
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
               ...state,
                input : action.input
            };
        case INSERT:
            return {
               ...state,
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
               ...state,
                todos : state.todos.map(todo =>
                    todo.id === action.id? {...todo, done :!todo.done } : todo
                )
            };
        case REMOVE:
            return {
               ...state,
                todos : state.todos.filter(todo => todo.id!== action.id)
            };
        default:
            return state;
    }
}

export default todos;