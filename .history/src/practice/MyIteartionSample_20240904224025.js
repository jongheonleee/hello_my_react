import { Component } from "react";

const MyIterationSample = () => {
    // 5가지 단어가 담겨진 배열
    // 해당 배열로부터 리스트를 만듦
    // 입력 인풋 있음, 사용자가 입력하면 값 저장
    // '추가' 버튼 누르면 해당 입력값이 배열에 추가되고 리렌더링됨
    const arr = [
        { id : 1, text : 'John' },
        { id : 2, text : 'Jane' },
        { id : 3, text : 'herent' },
        { id : 4, text : 'coco'},
        { id : 5, text : 'gren'}
    ];

    const list = arr.map(
                        (id, text) => <li key={id}>{text}</li>
                    );


    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )

}

export default MyIterationSample;