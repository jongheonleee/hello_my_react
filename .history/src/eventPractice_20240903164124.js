import { Component } from "react";


class EventPractice extends Component {

    state = {
        message : "와우"
    }

    handleChange = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="test"
                    name = "message"
                    placeholder="입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPractice;