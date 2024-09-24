import logo from './logo.svg';
import { Routes, Route } from'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile/:username' element={<Profile/>}/>
    </Routes>
  );
}

export default App;
