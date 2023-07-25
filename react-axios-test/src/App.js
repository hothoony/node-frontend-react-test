import './App.css';
import AudioFile from './components/AudioFile';
import AxiosApi from './components/AxiosApi';
import FileDownload from './components/FileDownload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Axios</h1>
        
        <AxiosApi/>
        <FileDownload/>
        <AudioFile/>

      </header>
    </div>
  );
}

export default App;
