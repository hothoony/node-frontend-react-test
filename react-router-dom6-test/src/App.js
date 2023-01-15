import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './compoennts/Menu';
import Home from './compoennts/page/Home';
import About from './compoennts/page/About';
import Contact from './compoennts/page/Contact';
import Join from './compoennts/page/Join';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Router
        <BrowserRouter>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/signup" element={<Join/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
