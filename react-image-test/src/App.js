import logo from './logo.svg';
import './App.css';

function App() {

  const border = {
    border: '1px solid red',
    marginBottom: '20px',
    padding: '10px',
  };

  const margin0 = {
    margin: '0',
  };

  return (
    <div className="App">
      <header className="App-header">

        <div style={border}>
          <h3 style={margin0}>img1</h3>
          <img src={ logo }/>
        </div>

        <div style={border}>
          <h3 style={margin0}>img2</h3>
          <img src={ './logo.svg' }/>
        </div>

        <div style={border}>
          <h3 style={margin0}>img3</h3>
          <img src={ require('./logo.svg') }/>
        </div>

        <div style={border}>
          <h3 style={margin0}>img4</h3>
          <img src={ require('./logo.svg').default }/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
