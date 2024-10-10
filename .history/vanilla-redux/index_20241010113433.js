// 수정할 DOM 노드를 가르키는 값을 미리 선언
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increse');
const btnDecrease = document.querySelector('#decrease');

// 액션 이름 정의 
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';