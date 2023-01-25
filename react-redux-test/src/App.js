import './App.css';
import LoginForm from './components/LoginForm';
import LoginView from './components/LoginView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Redux
        <LoginForm/>
        <LoginView/>
      </header>
    </div>
  );
}

export default App;
