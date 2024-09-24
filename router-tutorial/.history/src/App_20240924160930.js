import logo from './logo.svg';
import { Routes, Route } from'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profiles/:username' element={<Profile/>}/>
      </Route>


      <Route path='/articles' element={<Articles/>}>
        <Route path=':id' element={<Article />}/>
      </Route>
    </Routes>
  );
}

export default App;
