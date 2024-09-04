
import { Component }  from 'react';
import LifeCycleSample from './learning/LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  render() {
    return (
      <LifeCycleSample/>
    );
  }
}

export default App;
