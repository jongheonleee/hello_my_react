# Hello My React 🙋🏻‍♂️

<br>

## 📌 01. 리액트의 등장 배경 및 기본 개념 

<img src="src/images/브라우저렌더링과정.png" height = "400" width = "800">

> - 브라우저 렌더링 과정 

<br>

<img src="src/images/렌더트리.png" height = "400" width = "800">

> - DOM 형태. 기본적으로 트리 자료구조임 

<br>


<img src="src/images/VirtualDom형태.png" height = "400" width = "800">

> - Virtual DOM 형태

<br>


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

## 📌  08. Hooks

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
<br>


## 📌 11. 컴포넌트 성능 최적화하기

#### 👉 많은 데이터를 렌더링하기 
> - 많은 데이터를 렌더링할 때 성능은 중요한 요소임
> - 예를들어서, 2500개의 'todo'가 있는데 하나의 'todo'를 업데이트할 때 코드를 어떻게 작성하느냐에 따라 성능은 차이가 많이남
> - 특정 'todo'를 체크한 경우 App 컴포넌트의 state가 변경되면서 App 컴포넌트가 리렌더링됨
> - 이 과정에서 부모 컴포넌트가 리레더링되었으니까 TodoList 컴포넌트가 리렌더링되고 그 안의 2500개의 컴포넌트들이 리렌더링됨
> - 이를 최적화해야함. 즉, 리렌더링이 불필요할 때는 리렌더링을 방지해주어야함

<br>

#### 👉 React.memo를 사용하여 컴포넌트 성능 최적화하기

> - 클래스형 컴포넌트에서는 shouldComponentUpdate() 라는 라이프 사이클 메서드를 사용하면됨
> - 함수형 컴포넌트에서는 React.memo()를 사용해야함
>   - 컴포넌트의 props가 변경되지 않았다면, 리렌더링하지 않도록 설정해줌

<br>

#### 👉 데이터 변동으로 인해 특정 함수가 바뀌지 않게 설정하기

> - 현재 프로젝트에서는 todos 배열이 업데이트되면 onRemove(), onToggle() 함수가 새롭게 업데이트됨
> - 함수가 새로 만들어지는 상황을 방지하기 위한 방법은 아래와 같이 2가지가 있음
>   - (1) useState() 사용
>   - (2) useReducer() 사용

<br>

#### 👉 useReducer()란?

> - useReducer()는 React에서 상태 관리를 위해 사용하는 Hooks의 일종. 보통 useState()보다 복잡한 상태 로직을 처리하거나 여러 값을 관리할 때 사용함
> - useReducer()눈 3가지 파라미터를 전달받음
>   - (1) reducer : 상태를 업데이트하는 함수
>     - 해당 함수는 두 가지 파라미터를 전달받음
>        - (1) state : 현재 상태
>        - (2) action : 상태를 어떻게 변화시킬지 나타내는 값
> 
>   - (2) initialState : 상태의 초기 값 설정 
> 
>   - (3) init(optional) : 초기 상태를 설정하기 위한 함수 

<br>


## 📌 12. immer를 사용하여 더 쉽게 불변성 유지하기 

#### 👉 기존의 자바스크립트 문법으로 객체의 구조가 엄청나게 깊어지면 불변성을 유지하고 업데이트 하는 것은 까다로움 

```javascript
const state = {
  user: {
    profile: {
      name: 'John Doe',
      address: {
        city: 'New York',
        zipcode: '10001'
      }
    },
    preferences: {
      theme: 'dark',
      notifications: {
        email: true,
        sms: false
      }
    }
  }
};

// "zipcode"를 "10002"로 업데이트하고 싶다고 가정해봅시다.
// 객체의 불변성을 유지하면서 깊은 구조를 업데이트해야 합니다.

const updatedState = {
  ...state, // 최상위 객체를 복사
  user: {
    ...state.user, // user 객체 복사
    profile: {
      ...state.user.profile, // profile 객체 복사
      address: {
        ...state.user.profile.address, // address 객체 복사
        zipcode: '10002' // zipcode만 업데이트
      }
    }
  }
};



// immer 라이브러리의 produce() 예시
import produce from 'immer';

const state = {
  user: {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      zipcode: '10001'
    }
  }
};

// `produce`를 사용하여 상태 업데이트
const nextState = produce(state, draft => {
  // 가변적으로 상태를 수정하듯이 작성
  draft.user.age = 31;
  draft.user.address.city = 'San Francisco';
});

console.log(nextState);
/*
출력:
{
  user: {
    name: 'John Doe',
    age: 31,
    address: {
      city: 'San Francisco',
      zipcode: '10001'
    }
  }
}
*/

```

> - 전개 연산자는 기본적으로 '얕은 복사'임
> - 객체의 구조가 엄청나게 깊어지면 위의 예시처럼 불변성을 유지하면서 업데이트 하는 것이 어려움
> - immer 라이브러리를 통해 구조가 복잡한 객체도 매우 쉽고 짧은 코드를 사용하여 불변성을 유지하면서 업데이트 할 수 있음

<br>

#### 👉 기존의 자바스크립트 문법으로 객체의 구조가 엄청나게 깊어지면 불변성을 유지하고 업데이트 하는 것은 까다로움 

> - immer 라이브러리의 핵심은 '불변성에 신경쓰지 않은 것처럼 코드를 작성하되 불변성 관리는 제대로 해주는 것'임
> - immer에는 produce()가 있음. 해당 함수는 2가지 파라미터를 전달받음
>   - (1) 수정하고 싶은 상태
>   - (2) 상태를 어떻게 업데이트할 지 정의하는 함수
> - produce()를 호출할 때 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환함 

<br>

#### 👉 불변성의 중요성 

> - 리액트 컴포넌트에서 상태를 업데이트할 때 불변성을 지키는 것은 매우 중요함
>   - 기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 '불변성을 지킨다'라고함
> - 업데이트가 필요한 곳에서는 아예 새로운 배열 혹은 객체를 만들기 때문에, React.memo를 사용했을 때 props가 바뀌었는지 혹은 바뀌지 않았는지를 알아내서 리렌더링 성능을 최적화해 줄 수 있음
> - 리스트에 관련된 컴포넌트를 최적화할 때는 리스트 내부에서 사용하는 컴포넌트도 최적화해야 하고, 리스트로 사용되는 컴포넌트 자체도 최적화해 주는 것이 좋음
> - 리스트 관련 컴포넌트를 작성할 때는 리스트 아이템과 리스트, 이 두가지 컴포넌트를 최적화해야함
> - 내부 데이터가 100개를 넘지 않거나 업데이트가 자주 일어나지 않으면 이런 최적화 작업을 안해줘도됨


<br>

#### 👉 react-virtualized 를 사용한 렌더링 최적화

> - 앞서 리렌더링 성능을 최적화할 때는 필요할 때만 리렌더링하도록 최적화함
> - 또 최적화해줄 부분이 존재하는데, '화면에 나타나지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게함(스크롤해서 보여질 때 리렌더링)'
> - react-virualized를 사용하면 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게 만듦
> - 스크롤하고 해당 위치에 컴포넌트를 보여줘야할 때 렌더링 처리함 


<br>
<br>

## 📌 13. 리액트 라우터로 SPA 개발

#### 👉 라우팅이란?

> - 사용자가 요청한 URL에 따라 알맞는 페이지를 보여주는 것
> - 여러 페이지로 구성된 웹 애플리케이션을 만들 때 페이지 별로 컴포넌트들을 분리해가면서 프로젝트를 관리하기 위한 것이 '라우팅 시스템'
> - 리액트에서 라우트 시스템을 구축하기 위해 사용하는 방법은 크게 2가지
>   - (1) 리액트 라우터 : 컴포넌트 기반으로 라우팅 시스템을 설정함
>   - (2) Next.js : 파일 경로 기반으로 작동함 

<br>

#### 👉 싱글 페이지 애플리케이션, 멀티 페이지 애플리케이션

> - 싱글 페이지 애플리케이션 : 하나의 페이지로 이루어진 애플리케이션
> - 멀티 페이지 애플리케이션 : 여러 페이지로 이루어진 애플리케이션
> - <img src="src/images/멀티페이지애플리케이션.png" width="400" height="400"/>
> - 사용자가 다른 페이지로 이동할때마다 새로운 html을 받아오고, 페이지를 로딩할 때마다 서버에서 CSS, JS, 이미지 파일 등의 리소스를 전달받아서 브라우저 화면에 보여줌
> - 사용자 인터렉션이 많고 다양한 정보를 제공하는 모던 웹 애플리케이션은 위의 방식(멀티 페이지 애플리케이션) 적합하지 않음. 매우 비효율적인 구조 
> - 그래서, 리액트 같은 라이브러리를 사용해서 뷰 렌더링을 사용자의 브라우저가 담당하도록하고 우선 웹 애플리케이션을 브라우저에 불러와서 실행시킨 후 사용자의
 인터렉션이 발생하면 필요하 부분만 자바스크립트를 사용하여 업데이트 하는 방식 사용
 > - <img src="src/images/싱글페이지애플리케이션.png" width="400" height="400"/>
 > - html은 한번만 받아와서 웹 애플리케이션을 실행시킨 후, 이후에는 필요한 데이터만 받아서 화면에 업데이트 하는 방식
 > - 리액트 라우터는 사용자가 링크를 눌러 다른 페이지로 이동할 때 서버에 다른 페이지의 html을 새로 요청하는 것이 아니라, 브라우저의 History API를 사용하여 브라우저의 주소창의 값만 변경하고 기존에 페이지에 띄웠던 웹 애플리케이션을 그대로 유지하면서 라우팅 설정에 따라 또 다른 페이지를 보여줌 

 <br>

 #### 👉 리액트 라우팅 적용 및 기본 사용방법 

> - 사용자의 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주려면 Route 컴포넌트를 통해 라우트 설정을 해야함
>
> #### Link 컴포넌트를 통해 다른 페이지로 이동하는 링크를 보여줄 수 있음
>   - 리액트 라우터를 사용하는 프로젝트에선 a 태그 사용하면 안됨
>   - a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러옴
>   - Link 컴포넌트는 페이지를 새로 불러오는 것을 막고 History API 를 통해 브라우저 주소의 경로만 바꾸게 해줌
> 
> #### URL 파라미터와 쿼리스트링
> - URL 파라미터는 주소 경로에 유동적인 값을 넣는 형태, 쿼리스트링은 주소 뒷 부분에 '?' 뒤에 key=value 로 값을 정의하며 &로 구분하는 형태
> - URL 파라미터는 주로 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용, 쿼리스트링은 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션을 전달할 때 사용 
> 
> #### 중첩된 파라미터
> - Outlet 컴포넌트란? Router의 Children으로 들어가는 JSX 엘리먼트를 보여줌
> - Outlet 컴포넌트가 사용된 자리에 중첩된 라우트가 보여짐
> - 중첩된 라우트와 Outlet은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을 때도 유용함
> - useNavigate()는 Link 컴포넌트를 사용하지 않고 다른 페이지로 이동할 때 사용하는 Hook 
> 
> #### NavLink 컴포넌트
> - 해당 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 정보와 일치하는 경우 특정 스타일 또는 CSS 클래스로 적용함
> - Navigate 컴포넌트는 페이지를 리다이렉트하고 싶을 때 사용함 


<br>
<br>

## 📌 14. 외부 API를 연동하여 뉴스 뷰어 만들기

#### 👉 비동기 작업의 이해 

> - 서버의 API를 사용해야 할 때는 네트워크 송수신 과정에서 시간이 걸림, 응답을 받을 때까지 기다렸다가 전달받은 응답 데이터를 처리하는 방식
> - 이 과정에서 해당 과정을 비동기적으로 처리함
> - 동기적으로 작업을 처리하는 경우, 특정 요청이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없음.
> - 비동기적으로 작업을 처리하는 경우, 특정 요청이 끝날 때까지 기다리지 않음. 즉, 웹 애플리케이션이 멈추지 않기 때문에 동시에 여러가지 요청을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출 할 수 있음 
> - <img src="src/images/동기적vs비동기적.png" width="400" height="400"/>

<br>

#### 👉 콜백 함수 

```javascript
// 파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수가 있음
// 그리고 해당 함수가 처리된 직후 어떠한 작업을 하고 싶다면 '콜백 함수'를 활용해서 작업함

function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;

    if (callback) {
      callback(result);
    }
  }, 1000)
}

increase(0, result => {
  console.log(result);
})

// '콜백지옥', 여러 번 중첩되어 코드의 가독성이 나빠짐 
// 1초에 걸쳐서 10, 20, 30, 40과 같은 형태로 여러번 순차적으로 처리하고 싶은 경우, 콜백 함수를 중첩하여 구현할 수 있음
function increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;

    if (callback) {
      callback(result);
    }
  }, 1000);
} 

console.log('작업 시작');
increase(0, result => { // 1초, result = 10
  console.log(result);
  increase(result, result => { // 2초, result = 20 
    console.log(result);
    increase(result, result => { // 3초, result = 30
      console.log(result);
      increase(result, result => { // 4초, result = 40
        console.log(result);
        console.log('작업완료');
      });
    });
  });
});

```

> - 자바스크립트에서 비동기 작업을 할 때 흔히 사용하는 방법은 '콜백 함수'를 사용하는 것
> - 콜백함수란? 특정 작업을 처리하려는 목적으로 만들어진 함수
> - 콜백 안에 또 콜백을 넣어서 구현하는 할 수 있음, 너무 여러번 중첩되어 코드의 가독성이 나빠지는 것을 '콜백지옥'이라고함 


<br>

#### 👉 Promise 

```javascript
function increase(number) {
  // promise 정의 
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;

      // 실패 
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }

      // 성공
      resolve(result);
    }, 1000);
  });

  // promise 반환 
  return promise;
}

increase(0)
  .then(number => {
    // Promise에서 resolve된 값은 .then을 통해 받아올 수 있음
    console.log(number); 
    return increase(number); // Promise를 리턴하면 
  })
  .then(number => {
    // 또, .then으로 처리 가능함
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .then(number => {
    console.log(number);
    return increase(number);
  })
  .catch(e => {
    // 도중에 에러가 발생하면 .catch를 통해 알 수 있음
    console.log(e);
  });

```

> - '콜백지옥' 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능임
> - 여러 작업을 연달아 처리한다고 해서 함수를 여러번 감싸는 것이 아닌 .then을 사용하여 그다음 작업을 설정하기 때문에 '콜백지옥'이 형성되지 않음


<br>

#### 👉 async/await 

```javascript

function increase(number) {
  // promise 정의 
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;

      // 실패 
      if (result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }

      // 성공
      resolve(result);
    }, 1000);
  });

  // promise 반환 
  return promise;
}

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    
    result = await increase(result);
    console.log(result);

    result = await increase(result);
    console.log(result);

    result = await increase(result);
    console.log(result);

    result = await increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
```

> - async/await는 Promise를 더욱 쉽게 사용할 수 있도록해줌. 
> - 해당 문법을 사용하려면 함수의 앞부분에 async 키워드를 추가하고 해당 함수 내부에서 Promise의 앞 부분에 await 키워드를 사용함 
> - 이렇게 하면 Promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있음


<br>
<br>

## 📌 15. Context API 

#### 👉 Context API를 사용한 전역 상태 관리 흐름 이해하기


> - <img src="src/images/일반적인전역상태관리흐름.webp" width="400" height="400"/>
> - <img src="src/images/ContextAPI를사용한전역상태관리흐름.webp" width="400" height="400"/>
> - Context API는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을때 유용한 기능
> - 예를들어서, 로그인 정보, 애플리케이션 환경 설정, 테마 ... 이 있음
> - 리액트 애플리케이션은 컴포넌트 간에 데이터를 props로 전달하기 때문에 컴포넌트 여기저기서 필요한 데이터가 있을 때는 주로 최상위 컴포넌트인 APP의 state에 넣어서 관리함 
> - 하지만, 해당 방식은 규모가 큰 애플리케이션에서는 비효율적인 방식
> - Context API를 이용하면 Context를 만들어 단 한번에 원하는 값을 받아와서 사용할 수 있음
> - 결론, 기존에는 컴포넌트 간에 상태를 교류해야 할 때 무조건 '부모 -> 자식' 흐름으로 props를 통해 전달함
> - 하지만, Context API를 통해 간단하게 전달함. 전역적으로 여기저기서 사용되는 상태가 있고 컴포넌트의 개수가 많은 상황이면 Context API를 사용하는 것을 권장함


<br>
<br>

## 📌 16. 리덕스 라이브러리 이해하기 

#### 👉 개념 미리 정리하기 

```javascript
// 액션 코드
{
  type : 'ADD_TODO', // 액션 객체는 type 필드를 반드시 가져야함 
  data : {
      id : 1,
      text : 'Hello Yonuel!'
  }
}

// 액션 생성 함수 코드
function addTodo(data) {
  return {
    type : 'ADD_TODO',
    data
  };
}

const changeInput = text => ({
  type : 'CHANGE_INPUT',
  text
});

// 리듀스 코드 
const initialState = {
  counter : 1
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT : 
      return {
        counter : state.counter + 1
      };

    default :
      return state; 
  }
}

// 구독 코드
const listener = () => {
  console.log('상태가 업데이트됨');
}

const unsubscribe = store.subscribe(listener);
unsubscribe(); // 추후 구독을 비활성할 때 함수 호출 

```

> - #### 리덕스란?
> - 리액트 애플리케이션에서 '상태를 전역적으로 관리'하기 위해 사용되는 라이브러리
> - 리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있음
> - 컴포넌트끼리 똑같은 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손 쉽게 상태 값을 전달하거나 업데이트 할 수 있음
> - 리덕스를 사용하면 상태를 더욱 처계적으로 관리할 수 있기 때문에 프로젝트의 규모가 큰 경우 리덕스를 사용하는 게 좋음
> 
> - #### 액션이란?
> - 하나의 객체로 표현되는 것으로 어떤 변화가 필요할면 발생함
> 
> - #### 액션 생성 함수란?
> - 액션 객체를 생성하는 함수
> - 어떤 변화를 일으켜야 할 때마다 액션 객체를 생성해야 하는데, 이때 액션 생성 함수를 주로 사용함
> 
> - #### 리듀스란?
> - 변화를 일으키는 함수로서 액션을 만들어서 발생시키면 리듀스가 현재 상태와 전달받은 액션 객체를 파라미터로 받아옴
> - 두 값을 참고하여 새로운 상태를 만듦
> 
> - #### 스토어란?
> - 프로젝트에 리덕스를 적용하기 위해 스토어를 만듦
> - 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어있음
> - 하나의 프로젝트에는 하나의 스토어만 가짐
> 
> - #### 디스패처란?
> - 스토어의 내장 함수 중 하나로서 디스패처는 '액션을 발생시키는 것'
> - dispatch(action) 형태로 액션을 파라미터로 넣어서 호출함
> - 해당 함수가 호출하면 스토어는 리듀스 함수를 실행시켜서 새로운 상태를 만듦
> 
> - #### 구독이란?
> - 스토어의 내장 함수 중 하나로서 subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출하면 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출됨

<br>

#### 👉 리덕스의 세 가지 규칙 

> - #### 단일 스토어
> - 하나의 애플리케이션 안에는 하나의 스토어가 들어 있어야함. 
> - 스토어가 많아지면 상태 관리가 복잡해짐 
> 
> - #### 읽기 전용 상태
> - 상태를 업데이트할 때 기존의 객체는 건드리지 않고 새로운 객체를 생성해야함
> - 리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교 검사를 하기 때문
> 
> - #### 리듀서는 순수한 함수
> - 순수함수의 조건은 아래와 같음 
>   - (1) 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받음
>   - (2) 파라미터 외의 값에는 의존하면 안됨
>   - (3) 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 객체를 생성해서 반환해야함
>   - (4) 똑같은 파라미터로 호출된 리듀스 함수는 언제나  같은 결과 값을 반환해야함
 
<br>
<br>

## 📌 17. 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기 

#### 👉 리덕스를 사용하여 리액트 애플리케이션 상태 관리하는 것의 의의

> - 리액트 애플리케이션에서 리덕스를 사용하면, 상태 업데이트에 관한 로직을 모듈로 따로 분리하여 컴포넌트 파일과 별개로 관리할 수 있으므로 코드를 유지 보수하는 데 도움이 됨
> - 또한, 여러 컴포넌트에서 동일한 상태를 공유해야 할 때 매우 유용함.
> - 실제 업데이트가 필요한 컴포넌트만 리렌더링되도록 쉽게 최적화할 수도 있음 

<br>

#### 👉 UI 준비하기


> - <img src="src/images/432p프리젠테이셔널 컴포넌트와 컨테이너 컴포넌트.png" width="400" height="400"/>
> - 리덕스를 사용할 때 가장 많이 사용하는 패턴은 "프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것"
>   - 프레젠테이셔널 컴포넌트란? '주로 상태 관리가 이루어지지 않고, 그저 props를 받아와서 화면에 UI를 보여 주기만 하는 컴포넌트'
>   - 컨테이너 컴포넌트란? '리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 함'
> - 이 패턴을 사용하면 코드의 재사용성도 높아지고, 관심사의 분리가 이루어져 UI를 작성할 때 좀 더 집중할 수 있음


#### 👉 리덕스 관련 코드 작성하기 

```javascript

// 일반적인 구조 
> actions 
  - counter.js
  - todos.js

> constants
  - ActionTypes.js

> reducers 
  - counter.js
  - todos.js


// Ducks 패턴 
> modules
  - counter.js
  - todos.js
```

> - 첫 번째 구조는 가장 일반적인 구조임.
>   - actions, constants, reducers 라는 세 개의 디렉터리를 만들고 그 안에 기능별로 파일을 하나씩 만드는 방법
>   - 코드를 종류에 따라 다른 파일에 작성하여 정리할 수 있지만 새로운 액션을 만들 때마다 세 종류의 파일을 모두 수정해야함
> 
> - 두 번째 구조는 Ducks 패턴
>   - 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방법

