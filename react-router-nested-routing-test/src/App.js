import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';

function App() {

  const isLogin = false;
  // const isLogin = true;

  return (
    <div className="App">
      <header className="App-header">
        
        router nested routing
        <BrowserRouter>
          {/* <Switch>
            <Route exact path="/"/>
          </Switch> */}

          {
            (isLogin)
            ? (<Login/>)
            : (<Layout/>)
          }
          

        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
