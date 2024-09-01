import PropTypes from  'prop-types';

const MyComponent = ({name, children}) => {
    return (
    <div>
        My name is {name} <br />
        children is {children}
    </div>
    );
}

MyComponent.defaultProps = {
    name : 'hihi'
};

MyComponent.propTypes = {
    name : PropTypes
}

export default MyComponent; // 모듈 내보내기