# Hello My React 🙋🏻‍♂️

<br>

## 📌 01. 리액트의 등장 배경 및 기본 개념 


#### 🧑🏻‍🏫 주요 내용 작성 

<img src="" width="800" height="500"/>


#### 👉 '지속적으로 데이터가 변화하는 대규모 애플리케이션을 위한 뷰(view) 전용 라이브러리'

> - 대규모 애플리케이션을 기준으로 '템플릿'의 문제점은 데이터 변동에 따라 성능이 매우 느림. 데이터 변경에 따라 웹 브라우저가 css 다시 연산, 레이아웃 구성, 리페인팅 작업을 처리함 
> - 리액트는 '기존의 뷰는 날리고 처음부터 해당 부분만 새로 렌더링함. 즉, 데이터 변경이 발생됨에 따라 기존에 있던 것을 버리고 정해진 규칙에 따라 리렌더링함'

<br>

#### 👉 가장 기본 단위인 '컴포넌트'

> - 컴포넌트란? '뷰의 모습과 동작 방식을 정의해 놓음', '단순한 문자열(HTML)이 아닌 재사용 가능한 API로 수많은 기능을 내장하고 있음'
> - 리액트는 컴포넌트의 조합으로 화면을 구성하는 방식임 
> - render 함수를 통해서 특정 컴포넌트의 '모습'과 '동작' 방식을 정의하고 반환함(컴포넌트를 반환함) 

<br>

#### 👉 Virtual DOM을 사용하는 이유?

> - DOM? 'Document Object Model의 객체로 문서 구조를 트리 형식으로 표현한 방법, 트리 연산을 적용할 수 있음(삽입, 삭제, 수정, 조회)
> - 기존의 문제점은 DOM의 비효율적인 작업 처리
> - 기존의 DOM 동작 방식, 데이터 변경 발생하면 웹 브라우저가 CSS 재연산, 레이아웃 재구성, 리페인팅 작업을 처리함
> - 이를 최적화하기 위한 방법으로 Virtual DOM을 사용하여 'DOM을 최소한으로 조작하여 작업을 처리함'
> - 리액트는 Virtual DOM 방식을 통해 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화함

<br>

#### 👉 데이터 변경에 따른 동작 방식

> - (1) 전체 UI를 Virtual DOM에 리렌더링함
> - (2) 실제 DOM과 Virtual DOM을 비교함
> - (3) 변경된 부분만 실제 DOM에 적용함 

<br>
<br>

## 📌 02. JSX란? 


#### 🧑🏻‍🏫 주요 내용 작성 

<img src="" width="800" height="500"/>
(오늘 내용 정리해서 올리기)

#### 👉 번들러란? 

> - 번들은 '묶는다'를 의미함. 따라서, 번들러는 '파일을 묶듯이 연결하는 것'을 의미함
> - 브라우저에는 import 기능과 같이 모듈을 불러오는 기능이 존재하지 않음. Node.js에서 지원하는 기능임

<br>

#### 👉 JSX란? 

#### 01. JSX 대표 예시 코드 
```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

#### 02. JSX가 자바스크립트 형태의 코드로 변환되는 방법


```javascript

// JSX 코드 
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple JSX example.</p>
    </div>
  );
}

export default App;

// 변환된 자바스크립트 코드
import React from 'react';

function App() {
  return React.createElement(
    'div', 
    null, 
    React.createElement('h1', null, 'Hello, React!'),
    React.createElement('p', null, 'This is a simple JSX example.')
  );
}

export default App;


```

> - 위에 코드가 JSX임. 일반적인 문자열 형태의 HTML이 아니고 문자열 템플릿도 아님
> - 자바스크립트의 확장 문법임, 브라우저에서 실행되기 전에 코드가 번들링(임포트)되는 과정에서 바벨을 사용하여 일반 자바스크립트 형태로 변환됨(02 코드 참고) 


<br>

#### 👉 JSX에서 주의해야할 사항

> - 리액트 컴포넌트에서 요소 여러 개를 하나의 요소로 반드시 감싸야함 
> - Virtual DOM에서 컴포넌트 변화를 탐지할 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 함(규칙)
> - 자바스크립트 표현식을 작성하려면 JSX 내부에서 코드를 {}로 감싸면됨 


<br>
<br>

## 📌 03. 리액트의 기본 단위인 컴포넌트

#### 🧑🏻‍🏫 주요 내용 작성 

<img src="" width="800" height="500"/>
(오늘 내용 정리해서 올리기)


#### 👉 컴포넌트란?

> - 뷰의 '모습'과 '동작'을 정의한 객체
> - 컴포넌트의 기능은 단순히 UI 작업에 국한된 것이 아님, 라이프 사이클 API를 이용해 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리할 수 있으며, 임의의 메서드를 만들어 특별한 기능을 추가할 수 있음
> - 컴포넌트 선언에는 크게 2 가지가 있음 -> (1) 클래스형 컴포넌트, (2) 함수 컴포넌트 
> - 둘의 차이점, 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있음. 또한, 메서드를 정의할 수 있음


<br>

#### 👉 export(모듈 내보내기), import(모듈 불러오기)

```javascript

// 모듈 불러오기 
import MyComponent from './MyComponent';


// 모듈 내보내기 
export default App;

```


<br>

#### 👉 props, 컴포넌트 속성을 설정할 때 활용

#### 01. props 사용하는 간단한 예제
```javascript
import PropTypes from 'prop-types';


// 자식 컴포넌트 
const MyComponent = props => {
    return <div> hi my name is {props.name}! </div>
}

// defaultProps로 기본값 설정
MyComponent.defaultProps = {
    name : 'Yeonuel'
};

// propType로 타입을 통해 필수 props 지정하거나 props 타입을 지정함
MyComponent.propTypes = {
    name : PropTypes.string
}

export default MyComponent;

// 부모 컴포넌트 
import MyComponent from './MyComponent';

const App = () => {
    // 부모 컴포넌트에서 자식 컴포넌트의 props를 설정함 
    return <MyComponent name = 'Yeonuel' />;
};

export default App;

```


> - props는 컴포넌트 속성을 설정할 때 사용하는 요소, 부모 컴포넌트에서 설정해줌, 자식 컴포넌트는 부모 컴포넌트에서 설정한 속성을 사용함. 이때, 자식 컴포넌트는 props를 읽기 전용으로만 사용
> - 함수에서 파라미터를 전달 받듯이, 컴포넌트도 이와 마찬가지로 props에서 값을 전달받음. 즉, props 값은 컴포넌트 함수의 파라미터로 받아와서 사용함 
> - defaultProps를 통해 기본값 설정 가능함
> - 컴포넌트 태그 사이의 내용을 보여주는 props도 있음. 바로 children
> - 비구조화 할당(객체에서 값을 추출하는 문법)을 많이 활용함 
> - propTypes를 통해 props 검증 가능함


<br>

#### 👉 state, 컴포넌트 내부에서 수정 가능한 값


#### 01. state 대표 예시
```javascript
import { Component } from "react";

// 컴포넌트도 객체다. 컴포넌트는 모습과 상태를 지님. 또한, 여러 기능이 지원됨.
class Counter extends Component {
    // state를 통해 Counter 컴포넌트 내부에서 읽기, 쓰기 가능한 변수를 선언함(iv) 
    state = {
        number: 0,
        fixedNumber : 7
    }; // 생성자 함수 사용하지 않아도 바로 위와 같이 iv 초기화 가능 


    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>가변 : {number}</h1>
                <h1>불변 : {fixedNumber}</h1>
                <button onClick={() => {
                    // this.setState()를 통해 state에 새로운 값을 대입함 
                        this.setState({ 
                            number : number + 1
                        },
                        () => {
                            console.log('방금 seState가 호출됨');
                            console.log(this.state); // Counter의 iv 조회
                        }
                    )
                }}>
                    +1
                </button>
            </div>
        );
    
    }
}

export default Counter;

```

<br>

#### 02. useState 활용 대표 예시

```javascript
import { useState } from "react";

const Say = () => {
    const [message, setMassage] = useState('');
    const onClickEnter = () => setMassage('안녕하세요!');
    const onClickLeave = () => setMassage('안녕히 계세요!');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color : 'red'}} onClick={() => setColor('red')}>
                red
            </button>
            <button style={{ color : 'green'}} onClick={() => setColor('green')}>
                green
            </button>
        </div>
    )
}

export default Say;
```


> - props는 '읽기 전용', state는 '읽기, 쓰기(수정) 모두 가능'
> - state 값을 수정할 때는 this.setState()와 같은 함수를 통해서 변경함 
> - useState()를 통해서 함수 컴포넌트에서 state를 사용하게 만듦
> - state 값을 변경할 때는 항상 setState(), useState()를 통해 전달받은 세터 함수를 사용해야함 

<br>
<br>


## 📌 04. 이벤트 핸들링 

#### 🧑🏻‍🏫 주요 내용 작성 

<img src="" width="800" height="500"/>
(오늘 내용 정리해서 올리기)


#### 👉 이벤트란?
> - 사용자가 웹 브라우저에서 DOM 요소와 상호 작용하는 것 

<br>

#### 👉 리액트의 이벤트 시스템
> - 웹 브라우저의 HTML 이벤트와 매우 유사한 구조임
> - 웹 브라우저의 HTML 이벤트와 인터페이스가 동일함
> - 주의 사항
> - (1) 카멜 표기법을 사용해야함
> - (2) 이벤트를 설정할 때, 하수 형태의 객체를 전달하는 것임
> - (3) DOM 요소에만 이벤트를 설정할 수 있음
>   - 컴포넌트에 자체적으로 이벤트 설정 할 수 없음
>   - 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정할 수 있음

<br>

#### 👉 리액트 이벤트 시스템 예시 
```javascript
import { useState  } from "react";
 
const EventPractice2 = () => {
      // state 초기화 
   const [username, setUsername] = useState(''); 
   const [message, setMessage] = useState('');

   // 이벤트 핸들링(함수) 정의 
   const onChangeUsername = e => setUsername(e.target.value);
   const onChangeMessage = e => setMessage(e.target.value);
   const onClick = () =>  {
       alert(`${username} : ${message}`);
       setUsername('');
       setMessage('');
   };

const onKeyPress = e => {
        if (e.key === 'Enter') {
           onClick();
       }
   };

   // 컴포넌트 반환
   return (
       <div>
           <input
               type='text'
               name='username'
               placeholder="사용자명"
               value = {username}
               onChange={onChangeUsername}
             />
           <input
               type='text'
               name='message'
               placeholder="입력해보세요"
               value={message}
               onChange={onChangeMessage}
               onKeyPress={onKeyPress}
           />
           <button onClick={onClick}>확인</button>
       </div>
   )
} 
export default EventPractice2;
```


<br>
<br>


## 📌 05. ref : DOM에 이름 달기 

#### 🧑🏻‍🏫 주요 내용 작성 

<img src="" width="800" height="500"/>
(오늘 내용 정리해서 올리기)


#### 👉 ref란?

> - 일단, HTML에서 DOM 요소에 이름 다는 경우, id를 활용함
>
> ```html
> <div id='my-element'></div>
> ```
> 
> - 이를 통해 해당 요소에 css 적용하거나 이벤트 핸들리 ... 의 작업을 처리할 수 있음
> - 리액트에서도 DOM에 이름을 다는 방식이 있는데 그것이 바로 'ref'(reference)
> - 즉, ref란 리엑트에서 DOM 요소에 이름을 다는 방법을 의미함

<br>

#### 👉 ref를 사용하는 경우

> - DOM을 반드시 직접적으로 건드려야 하는 경우에 ref를 사용함
> - (1) 특정 input에 포커스 주기
> - (2) 스크롤 박스 조작하기
> - (3) Convas 요소에 그림 그리기
> - ... 

<br>

#### 👉 ref를 사용하는 방법은 크게 2가지가 있음

> - (1) 콜백 함수를 통한 ref 설정
>   - ref를 담고자하는 요소에 ref라는 콜백 함수를 props로 전달함
>   - 해당 콜백함수는 ref 값을 파라미터로 전달받음 그리고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정함 
> 
> - (2) createRef를 통한 ref 설정 
>   - 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아야함
>   - 해당 멤버 변수를 ref를 달고자하는 요소에 ref props로 넣어줌
>   - this.input.current 형식으로 접근하면됨


```javascript
// 1번 방식 - 콜백 함수를 통한 ref 설정

import { Component } from "react";

class ScrollBox extends Component {

    scrollToBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        }

        return (
            <div
                style = {style}
                ref = {(ref) => {this.box = ref}}
            >
                <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;

import { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          to bottom!!
        </button>
      </div>
    )
  }
}



// 2번 방식 - createRef를 통한 ref 설정 
import { Component } from "react";

class RefSample extends Component {
    input = React.createRef();

    handlerFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.inpit}/>
            </div>
        );
    }

}

export default RefSample;


```



<br>
<br>


## 📌 06. 컴포넌트의 반복 


#### 👉 리액트에서 반복적인 내용을 효율적으로 보여주고 관리하는 방법
> - 자스의 map, filter 함수를 활용하여 반복되는 컴포넌트를 렌더링할 수 있음

<br>

#### 👉 자스의 map 예시 
> - arr.map(callback, [thisArg])
> - (1) callback : 새로운 배열의 요소를 생성하는 함수
>   - currentValue : 현재값
>   - index : 현재 인덱스
>   - array : 현재 처리되고 있는 원본 배열 
> - (2) thisArg : callback 내부에서 사용할 this 래퍼런스 

```javascript

let numbers = [1, 2, 3, 4, 5];

const processed = numbers.map(function(num) {
  return num * num;
});

console.log(processed);

// 출력 결과
> [1, 4, 9, 16, 25]

```

<br>

#### 👉 리액트에서 반복되는 컴포넌트를 map, filter로 처리하는 예시 

```javascript
import { useState } from 'react';

const IterationSample = () => {
   // 초기 상태 설정(useState 활용)
   const [ names, setNames] = useState([
    {id : 1, text : '눈사람'},
    {id : 2, text : '얼음'},
    {id : 3, text : '눈'},
    {id : 4, text : '바람'}
   ]);
   const [inputText, setInputText] = useState('');
   const [nextId, setNextId] = useState(5);

   // 새로운 이름을 등록하는 기능 
   const onChange = e => setInputText(e.target.value); // 인풋의 값 가져옴
   const onClick = () => {
    // 버튼 눌렀을 때, 요소 추가한 배열 생성
    const nextNames = names.concat({ // 버튼 눌렀을 때 요소 생성해서 추가함 
        id : nextId,
        text : inputText
    });

    
    // 요소 추가 이후, 기존의 값들 초기화 및 업데이트 
    setNextId(nextId+1);  // 다음 id로 초기화 
    setInputText(''); // 인풋 필드 초기화  
    setNames(nextNames); // names 업데이트 
    };
   
    // html 요소를 더블 클릭할 시 삭제함
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id); // id가 아닌 것들만 거르기 
        setNames(nextNames);
    }

   const nameList = names.map( name => <li 
                        key={name.id} 
                        onDoubleClick={() => onRemove(name.id)}>
                            {name.text}
                        </li>
            );
    return (
        <div>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </div>
    );
}

export default IterationSample;

```


<br>
<br>


## 📌 07. 컴포넌트의 라이프 사이클 메서드  

#### 🧑🏻‍🏫 주요 내용 작성 

<img src="src/images/컴포넌트라이프사이클종류.jpeg" width="800" height="500"/>
<img src="src/images/컴포넌트라이프사이클흐름.jpeg" width="800" height="500"/>

#### 👉 라이프 사이클
> - 모든 리액트 컴포넌트에는 라이프 사이클(수명 주기)이 존재함
> - 라이프 사이클 메서드는 클래스형 컴포넌트에서만 사용 가능함
>   - 함수형 컴포넌트에서는 Hooks을 이용해서 라이프 사이클 메서드 효과를 나타냄

<br>

#### 👉 라이프 사이클 메서드의 종류
> - Will 접두사
>   - 어떤 작업을 실행하기 전에 실행되는 메서드를 의미함
> - Did 접두사
>   - 어떤 작업을 실행한 후에 실행되는 메서드를 의미함 
> - 라이프 사이클 메서드의 종류는 크게 3가지로 구분할 수 있음
> - (1) 마운트 : DOM이 생성되고 웹 브라우저 상에 나타나는 것
> - (2) 업데이트 : 컴포넌트가 업데이트 되는 것 
> - (3) 언마운트 : 컴포넌트를 DOM에서 제거하는 것 


<br>

#### 👉 라이프 사이클 메서드 상세 설명
> #### render() { ... }
> - 컴포넌트의 '모습'과 '기능'을 정의하고 반환하는 메서드
> 
> #### constructor() { ... }
> - 컴포넌트의 생성자 메서드, 컴포넌트를 생성할 때 호출됨
> - 초기 state를 정할 수 있음
> 
> #### getDerivedStateFromProps() { ... }
> - props로 받아온 값을 state에 동기화시키는 용도로 사용함
> - 컴포넌트가 '마운트'되거나 '업데이트'될 때 호출됨
> 
> #### componentDidMount() { ... }
> - 컴포넌트 생성하고 첫 렌더링을 다 마친후 실행함
> - 비동기 작업을 처리할 때 사용함 
> 
> #### shouldComponentUpdate(nextProps, nextState) { ... }
> - props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 결정하는 메서드
> - 반환값을 boolean으로 해야함 
> 
> #### getSnapshotBeforeUpdate() { ... }
> - render()에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출됨
> 
> #### componentDidUpdate(prevProps, prevState, snapshot) { ... }
> - 리렌더링을 완료한 후에 실행함
> - prevProps, prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음
> - getSnapshotBeforeUpdate()에서 반환값이 있으면, 여기서 snapshot 값을 전달받을 수 있음 
> 
> #### componentWillUnmount() { ... }
> - 컴포넌트를 DOM에서 제거할 때 실행함
> - componentDidMount()에서 등록할 이벤트, 타이머 ... 가 있다면 여기서 제거해야함
> 
> #### componentDidCatch(error, info) { ... }
> - 컴포넌트 렌더링 중에 에러가 발생했을때 애플리케이션이 먹통되지 않고 정상적으로 UI를 보여줄 수 있게해줌


<br>
<br>

## 📌  8장. Hooks

#### 👉 Hooks 이란

> - Hook을 사용하면 클래스형 컴포넌트를 사용하지 않고도 대부분의 기능을 구현할 수 있음. (뭔가 파이썬의 ABC 추상 인터페이스 느낌임. 사용자가 굳이 만들어서 쓰는 것이 아니라 가져다가 사용해라)
> - 프로젝트 개발할 때, 함수 컴포넌트의 사용을 첫 번째 옵션으로 두고 꼭 필요한 상황에서만 클래스형 컴포넌트를 구현

<br>

#### 👉 Hook의 종류

> - (1) useState : 함수 컴포넌트에서 가변적인 상태(iv)를 지닐 수 있게 해줌
>    - (1) 상태값 : 초기값 설정
>    - (2) 상태를 변경하는 함수 : 해당 iv를 변경하는 함수 
>    - 한가지 상태에 대해서만 정의, 즉 여러개의 iv를 다루고 싶으면 그 만큼 만들어야함 
>
> - (2) useEffect : 렌더링 이후 특정 작업처리(추가 가공)
>    
> - (3) useReducer : 다영한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 때 사용
>    - 리듀스? '자바 스트림의 reduce()와 동일한 개념, 현재 상태(state), 액션(action, 특정 경우) 값을 전달받아 새로운 상태를 반환하는 함수'
> 
> - (4) useMemo : 렌더링 과정에서 특정 값이 바뀌었을 때만 연산을 실행, 원하는 값이 변경되지 않았다면 이전에 연산했던 결과를 재사용(최적화)
>
> - (5) useCallback : 렌더링 성능을 최적화하는 상황에서 사용, 함수를 재사용할 수 있음
>    - (1) 생성하고 싶은 함수
>    - (2) 배열(배열에는 어떤 값이 변경될 때 함수를 새로 생성해야하는지 명시함)
>
> - (6) useRef : 함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 도와줌

<br>

#### 👉 커스텀 Hooks 할용

> - 여러 컴포넌트에서 비슷한 기능을 공유할 경우, 이를 커스텀해서 새로운 Hook으로 작성하여 로직을 재활용 할 수 있음
> - 약간, 자바로 따지면 클래스 상속이나 Template Method 패턴과 같은 느낌
> - 컴포넌트는 여러개로 조합해서 사용할 수 있음. 이 점을 잘 인지해야함

<br>
<br>

## 📌 9장. 컴포넌트 스타일링 


#### 👉 컴포넌트 스타일링 하는 다양한 방법
> - (1) 일반 CSS
> - (2) Sass : CSS 전처리기 중 하나로 확장된 CSS 문법을 통해서 스타일링함
> - (3) CSS Module : 스타일 작성할 때 CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해줌
> - (4) styled_components : 스타일을 자바스크립트 파일에 내장시키는 방식으로 스타일 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게해줌

<br>

#### 👉 (1) 일반 CSS

```javascript

// App.css
.divStyle {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
}

// App.js
import React from 'react';
import './App.css';

function CssFileStyledComponent() {
  return <div className="divStyle">This is a CSS file styled component</div>;
}

export default CssFileStyledComponent;

```

> - 이름 짓기 규칙 
> - 클래스 이름이 충돌되지 않도록 만드는 것이 중요함. 
> - '컴포넌트 이름 - 클래스' 형식으로 작성함. 'App-header'
> - CSS Selector를 이용하면 CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있음


<br>

#### 👉 (2) Sass

```javascript

// App.scss
$primary-color: lightblue;
$padding-size: 20px;

.divStyle {
  background-color: $primary-color;
  padding: $padding-size;
  border-radius: 10px;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

// App.js
import React from 'react';
import './App.scss';

function SassStyledComponent() {
  return <div className="divStyle">This is a Sass styled component</div>;
}

export default SassStyledComponent;

```

> - CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해줌.
> - 스타일 코드의 재활용성을 높여주며 코드의 가독성을 높여줌
> - 두 가지 확장자가 존재함
>   - (1) .scss
>   - (2) .sass


<br>

#### 👉 (3) CSS Module

```javascript

// App.module.css
.divStyle {
  background-color: lightblue;
  padding: 20px;
  border-radius: 10px;
}

// App.js
import React from 'react';
import styles from './App.module.css';

function CssModuleStyledComponent() {
  return <div className={styles.divStyle}>This is a CSS module styled component</div>;
}

export default CssModuleStyledComponent;

```


> - CSS를 불러와서 사용할 때 클래스 이름을 고유한 값으로 만듦
> - [파일 이름] _ [클래스 이름] _ [해시 값] 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지함


<br>

#### 👉 (4) styled-components

```javascript

import React from 'react';
import styled from 'styled-components';

// Styled component 생성
const StyledButton = styled.button`
  background-color: palevioletred;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

function StyledComponentsExample() {
  return <StyledButton>Click me</StyledButton>;
}

export default StyledComponentsExample;


import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 20px;
  background-color: lightgray;
`;

const Title = styled.h1`
  font-size: 24px;
  color: darkblue;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: darkgray;
`;

function StyledComponentsExample() {
  return (
    <Wrapper>
      <Title>This is a Title</Title>
      <Paragraph>This is a paragraph with styled-components.</Paragraph>
    </Wrapper>
  );
}

export default StyledComponentsExample;

```


> - 자바스크립트 파일 안에 스타일을 선언하는 방식


<br>