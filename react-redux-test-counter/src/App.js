import './App.css';
import CounterEdit from './components/CounterEdit';
import CounterView from './components/CounterView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Redux
        <CounterEdit/>
        <CounterView/>
      </header>
    </div>
  );
}

export default App;
