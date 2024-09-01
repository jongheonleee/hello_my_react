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

export default MyComponent; // 모듈 내보내기