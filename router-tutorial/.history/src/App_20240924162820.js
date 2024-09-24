import logo from './logo.svg';
import { Routes, Route } from'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profiles/:username' element={<Profile/>}/>
      </Route>


      <Route path='/articles' element={<Articles/>}>
        <Route path=':id' element={<Article />}/>
      </Route>

      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
