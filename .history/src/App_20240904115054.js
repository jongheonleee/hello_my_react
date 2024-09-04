
import { Component }  from 'react';
import ScrollBox from './learning/ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
          <button onClick={() => this.ScrollBox.scrollToBottom()}>
            to bottom 
          </button>
      </div>
    );
  }
}

export default App;
