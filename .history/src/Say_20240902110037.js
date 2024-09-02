import { useState } from "react";

const Say = () => {
    const [message, setMassage] = useState('');
    const onClickEnter = () => setMassage('안녕하세요!');
    const onClickLeave = () => setMassage('안녕히 계세요!');

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1>{message}</h1>
        </div>
    )
}