import { Component } from "react";


class EventPractice extends Component {

    state = {
        message : "안녕"
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message : e.target.value
        });
    }

    handleClick() {
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
                    onChange={
                        (e) => {
                            this.setState(
                                { message : e.target.value }
                            )
                        }
                    }
                />
                <button
                    onClick={
                        () => {
                            alert(this.state.message);
                            this.setState({
                                message : ''
                            });
                        }
                }>
                    확인
                </button>
            </div>
        )
    }
}

export default EventPractice;