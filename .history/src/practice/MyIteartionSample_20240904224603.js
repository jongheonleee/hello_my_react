import { Component } from "react";

const MyIterationSample = () => {
    // 5가지 단어가 담겨진 배열
    // 해당 배열로부터 리스트를 만듦
    // 입력 인풋 있음, 사용자가 입력하면 값 저장
    // '추가' 버튼 누르면 해당 입력값이 배열에 추가되고 리렌더링됨

    // 1. 가지 단어가 담겨진 배열
    const arr = [
        { id : 1, text : 'John' },
        { id : 2, text : 'Jane' },
        { id : 3, text : 'herent' },
        { id : 4, text : 'coco'},
        { id : 5, text : 'gren'}
    ];


    // 2. 해당 배열로부터 리스트를 만듦
    const list = arr.map((e) => <li key={e.id}>{e.text}</li>);

    // 3. 입력 인풋 있음, 사용자가 입력하면 값 저장

    // 4. '추가' 버튼 누르면 해당 입력값이 배열에 추가되고 리렌더링됨
    const onClick = (e) => {
        // 사용자 입력값 조회
        const value = e.target.value;
        alert(value);
        const nextId = arr.length + 1;

        // 입력값으로 부터 요소 만들기
        // - 인덱스 값
        // - 입력값 
        const item = {
            id : nextId,
            text : value
        }

        // 배열에 추가해주기  
        arr.concat(item);
    }

    return (
        <div>
            <ul>{list}</ul>
            <input type="text" onClick={onClick}/>
        </div>
    )

}

export default MyIterationSample;