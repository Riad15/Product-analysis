
import './App.css';
import './component/Header/Header'
import './component/Home/Home'

import { Route, Routes } from 'react-router-dom';
import Reviews from './component/Reviews/Reviews';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Deshboard from './component/Deshboard/Deshboard';
import Blogs from './component/Blogs/Blogs';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/deshboard' element={<Deshboard></Deshboard>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>

    </div>
  );
}

export default App;
