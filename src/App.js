import React from 'react';

import './scss/style.scss';
import Home from './components/Home';
import Basket from "./components/pages/Basket"
import { Routes, Route } from 'react-router-dom';
import Shop from './components/pages/Shop';
import AboutUs from './components/pages/AboutUs';
import ModalWindow from './components/ModalWindow';
import ModalCallback from './components/ModalCallback';
import Item from './components/Item';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={ <AboutUs />} />
        <Route path="modal" element={ <ModalWindow />} />
        <Route path="/modalcallback" element={ <ModalCallback /> } />
        <Route path="/currentItem" element={ <Item />} />
      </Routes>
    </div>
  );
}

export default App;
