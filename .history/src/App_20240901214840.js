import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';

function App() { // 컴포넌트 -> 1. 모습, 2. 기능, 컴포넌트를 기본 단위로 여러개 조합해서 사용 가능
  return <MyComponent name="yeonuel" />
};

export default App;
