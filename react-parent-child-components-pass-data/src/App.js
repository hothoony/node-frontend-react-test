import './App.css';
import Child from './components/Child';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Parent 와 Child 컴포넌트 간에 데이터 전달
        <Parent />
      </header>
    </div>
  );
}

export default App;
