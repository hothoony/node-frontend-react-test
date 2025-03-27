import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clickTest = () => {
    console.log('clickTest, ', Math.random());
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>React Modal Example</h1>
        <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={openModal}>
          모달 열기
        </button>
        
        {/* 5초 동안 닫을 수 없는 모달 */}
        <Modal
          isOpen={isModalOpen}
          duration={5 * 1000} // 5초
          onClose={closeModal}
          message="이 모달은 5초 동안 닫을 수 없습니다."
        />

        {/* 모달 외부 UI */}
        <div style={{ marginTop: '20px' }}>
          <p>이 부분은 모달이 열려 있을 때 클릭되지 않습니다.</p>
          <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            onClick={clickTest}>
            클릭 테스트
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;
