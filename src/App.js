import React from 'react';

import './scss/style.scss';
import Header from './components/Header';
import Clothing from './components/Clothing';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
    <div>
    <Header />
    <Clothing />
    <About />
    <Footer />
    </div>
  );
}

export default App;
