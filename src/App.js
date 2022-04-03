
import './App.css';
import './component/Header/Header'
import './component/Home/Home'

import { Route, Routes } from 'react-router-dom';
import Reviews from './component/Reviews/Reviews';
import Home from './component/Home/Home';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      </Routes>

    </div>
  );
}

export default App;
