import './App.css';
import CSS01 from './components/css01/CSS01-inline-style';
import CSS02 from './components/css02/CSS02-global-style';
import CSS03 from './components/css03/CSS03-global-style';
import CSS04 from './components/css04/CSS04-css-module';
import CSS05 from './components/css05/CSS05-styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React CSS
        <CSS01/>
        <CSS02/>
        <CSS03/>
        <CSS04/>
        <CSS05/>
      </header>
    </div>
  );
}

export default App;
