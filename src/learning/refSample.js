import { Component } from "react";

class RefSample extends Component {
    input = React.createRef();

    handlerFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.inpit}/>
            </div>
        );
    }

}

export default RefSample;