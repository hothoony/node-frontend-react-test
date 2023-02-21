import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Logout from './components/login/Logout';
import useToken from './components/login/useToken';
import Dashboard from './components/views/Dashboard';
import Preferences from './components/views/Preferences';

function App() {

  const {token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Logout/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/preferences">Preferences</Link></li>
        </ul>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/preferences">
            <Preferences/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
