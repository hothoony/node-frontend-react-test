import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aes256_test from './pages/Aes256_test';
import Aes256_2_test from './pages/Aes256_2_test';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Aes256_test />
        {/* <Aes256_2_test /> */}

      </header>
    </div>
  );
}

export default App;
