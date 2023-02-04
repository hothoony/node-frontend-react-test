import './App.css';
import ArrayRender01_noComp from './components/ArrayRender01_noComp';
import ArrayRender02_useComp from './components/ArrayRender02_useComp';
import ArrayRender03_noComp_useKey from './components/ArrayRender03_noComp_useKey';
import ArrayRender04_useComp_useKey from './components/ArrayRender04_useComp_useKey';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
            {/* 
              key 를 사용하지 않으면 에러가 발생함
              => Warning: Each child in a list should have a unique "key" prop. 
            */}
        <ArrayRender01_noComp/>
        <ArrayRender02_useComp/>
        
            {/*
              key를 사용
            */}
        <ArrayRender03_noComp_useKey/>
        <ArrayRender04_useComp_useKey/>

      </header>
    </div>
  );
}

export default App;
