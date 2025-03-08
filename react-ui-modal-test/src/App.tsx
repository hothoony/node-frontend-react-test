import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useModal } from './hooks/useModal';
import Modal from './components/Modal';

function App() {

  const { isOpen, modalType, message, openModal, closeModal } = useModal();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Modal test</h2>

        <button onClick={() => openModal('info', 'This is an info message')}>modal info</button>
        <button onClick={() => openModal('warn', 'This is a warning message')}>modal warn</button>
        <button onClick={() => openModal('error', 'This is an error message')}>modal error</button>

        {isOpen && <Modal type={modalType} message={message} onClose={closeModal} />}

      </header>
    </div>
  );
}

export default App;
