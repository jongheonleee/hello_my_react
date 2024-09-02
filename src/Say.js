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