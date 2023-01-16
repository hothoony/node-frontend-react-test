import './App.css';
import Page01 from './components/Page01';
import Page02 from './components/Page02';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>React Recoil</div>
        <Page01 />
        <Page02 />
      </header>
    </div>
  );
}

export default App;
