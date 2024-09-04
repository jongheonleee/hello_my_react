import { Component } from "react";


class EventPractice extends Component {
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
            </div>
        )
    }
}

export default EventPractice;