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
   const onChange = e => setInputText(e.target.value);
   
   const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
    return (
        <>
        <input value={inputText} onChange={onChange}/>
        <button>추가</button>
        <ul>{nameList}</ul>
        </>
    );
}

export default IterationSample;