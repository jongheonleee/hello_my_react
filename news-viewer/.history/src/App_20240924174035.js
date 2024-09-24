import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=78c34ba2dcf6475f925c66e3401557fa',
      );
      setData(response.data);
    } catch (e) {
      console.lof(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};



export default App;
