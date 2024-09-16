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