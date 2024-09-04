import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent2 extends Component {
    static defaultProps = {
        name: 'Yeonuel',
        favoriteNumber: 7,
    }

    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }

    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                My name is {name} <br />
                Children is {children} <br />
                My favorite number is {favoriteNumber}
            </div>
        );
    }
}

export default MyComponent2;