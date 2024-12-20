import { Component } from "react";


class EventPractice extends Component {

    state = {
        username : '',
        message : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            username : '',
            message : ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="test"
                    name = "username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
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