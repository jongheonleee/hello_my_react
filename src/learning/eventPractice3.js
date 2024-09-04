import { useState } from 'react'

const EventPractice3 = () => {
    const [form, setForm] = useState({
        username : '',
        message : ''
    });

    const { username, message } = form;

    const onChage = e => {
        const nextForm = {
            ...form, // 기존의 form 이 곳에 복사
            [e.target.value] : e.target.value // 원하는 값을 덮어 씌우기 
        };

        setForm(nextForm);
    };

    const onClick = () => {
        alert(`${username} : ${message}`);
        setForm({
            username : '',
            message : ''
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <input
                type='text'
                name='username'
                placeholder="사용자명"
                value = {username}
                onChange={onChage}
                />
            <input
                type='text'
                name='message'
                placeholder="입력해보세요"
                value={message}
                onChange={onChage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice3;