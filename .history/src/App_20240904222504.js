
import { Component }  from 'react';
import LifeCycleSample from './learning/LifeCycleSample';
import ErrorBoundary from './learning/ErrorBoundary';
import IterationSample from './learning/IterationSample';

// 랜덤 색상 생성기 
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color : '#000000'
  }

  // 랜덤 색상 지정  
  handleClick = () => {
    this.setState({
      color : getRandomColor()
    });
  }

  // 컴포넌트 생성  
  render() {
    return (
      // <div>
      //   <button onClick={this.handleClick}>랜덤 색상</button> 
      //   <ErrorBoundary>
      //     <LifeCycleSample color={this.state.color}/>
      //   </ErrorBoundary>
      // </div>
      <IterationSample/>
    );
  }
}

export default App;
