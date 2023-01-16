import './App.css';
import Greeting from './components/Greeting';
import './locale/i18n-config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React i18n
        <Greeting/>
      </header>
    </div>
  );
}

export default App;
