import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/admin/Dashboard';
import Setting from './components/admin/Setting';
import About from './components/front/About';
import Home from './components/front/Home';
import Login from './components/front/Login';
import Main from './components/layout/front/Main';
import MainAdmin from './components/layout/admin/MainAdmin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Switch>

            <Route path='/login' component={Login}/>

            <Route exact path='/admin/:path?'>
              <MainAdmin>
                <Switch>
                  <Route exact path='/admin' component={Dashboard}/>
                  <Route path='/admin/setting' component={Setting}/>
                </Switch>
              </MainAdmin>
            </Route>

            <Route>
              <Main>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                </Switch>
              </Main>
            </Route>

          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
