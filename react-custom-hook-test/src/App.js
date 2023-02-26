import './App.css';
import Demo_useFetch from './components/useFetch/Demo_useFetch';
import Demo_usePrevious from './components/usePrevious/Demo_usePrevious';
import Demo_useToggle from './components/useToggle/Demo_useToggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        react custom took
        {/* <Demo_useToggle/> */}
        {/* <Demo_useFetch/> */}
        <Demo_usePrevious/>

      </header>
    </div>
  );
}

export default App;
