import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component { 
    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChage = (e) => {
        this.setState({
            password : e.target.value
        });
    }

    handleButtonClick = (e) => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
    }

    render() {
        return (
            <div>
                <input
                    type ='password'
                    value = {this.state.password}
                    onChange={this.handleChage}
                    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failur') : ''}
                />
                <button onClick={this.handleButtonClick}>
                    검증하기
                </button>
            </div>
        );
    }

}

export default ValidationSample;