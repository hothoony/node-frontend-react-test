import './App.css';
import Test01_no_UseEffect from './components/Test01_no_UseEffect';
import Test02_using_UseEffect from './components/Test02_using_UseEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        UseEffect Test
        <Test01_no_UseEffect/>
        <Test02_using_UseEffect/>

      </header>
    </div>
  );
}

export default App;
