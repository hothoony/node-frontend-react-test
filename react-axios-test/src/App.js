import './App.css';
import AxiosApi from './components/AxiosApi';
import FileDownload from './components/FileDownload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Axios</h1>
        
        <AxiosApi/>
        <FileDownload/>

      </header>
    </div>
  );
}

export default App;
