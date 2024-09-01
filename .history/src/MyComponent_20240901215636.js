import PropTypes from  'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
    <div>
        My name is {name} <br />
        children is {children} <br />
        My favorite number is {favoriteNumber}
    </div>
    );
}

MyComponent.defaultProps = {
    name : 'yeonuel'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent; // 모듈 내보내기