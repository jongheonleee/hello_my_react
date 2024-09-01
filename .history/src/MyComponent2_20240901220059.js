import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent2 extends Component {
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

MyComponent2.defaultProps = {
    name: 'Yeonuel',
};

MyComponent2.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent2;