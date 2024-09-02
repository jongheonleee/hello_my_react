import { Component } from "react";

// 컴포넌트도 객체다. 컴포넌트는 모습과 상태를 지님. 또한, 여러 기능이 지원됨.
class Counter extends Component {
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
                <button onClick={() => this.setState({ number: number + 1 })}>
                    +1
                </button>
            </div>
        );
    
    }
}

export default Counter;