import logo from './logo.svg';
import { Fragment } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';  // Counter.js 파일로 Counter 컴포��트를 import합니다.
import EventPractice from './eventPractice';
import EventPractice2 from './eventPractice2';

import ValidationSample from './ValidationSample';

function App() { // 컴포넌트 -> 1. 모습, 2. 기능, 컴포넌트를 기본 단위로 여러개 조합해서 사용 가능
  return <ValidationSample />;
};

export default App;