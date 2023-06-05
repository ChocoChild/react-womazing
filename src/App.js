import React from 'react';

import './scss/style.scss';
import Home from './components/Home';
import Basket from "./components/pages/Basket"
import { Routes, Route } from 'react-router-dom';
import Shop from './components/pages/Shop';



function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/basket" element={ <Basket />}/> 
      <Route path="/shop" element={ <Shop /> } />
    </Routes>
  );
}

export default App;
