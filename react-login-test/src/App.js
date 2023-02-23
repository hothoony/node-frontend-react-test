import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import LogoutForm from './components/login/LogoutForm';
import useToken from './components/login/useToken';
import LoginAppHome from './components/views/LoginAppHome';
import Dashboard from './components/views/Dashboard';
import Preferences from './components/views/Preferences';

function App() {

  const {token, setToken} = useToken();
  console.log('token 체크', token);

  if (!token) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}>
        <LoginForm setToken={setToken}/>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1>login test app</h1>
      <BrowserRouter>
        <div>
          <LogoutForm/>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/preferences">Preferences</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <LoginAppHome/>
          </Route>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/preferences" component={Preferences}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
