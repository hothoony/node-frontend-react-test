import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/admin/Dashboard';
import Setting from './components/admin/Setting';
import About from './components/front/About';
import Home from './components/front/Home';
import Login from './components/front/Login';
import FrontLayout from './components/layout/FrontLayout';
import AdminLayout from './components/layout/AdminLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Switch>

            <Route path='/login' component={Login}/>

            <Route exact path='/admin/:path?'>
              <AdminLayout>
                <Switch>
                  <Route exact path='/admin' component={Dashboard}/>
                  <Route path='/admin/setting' component={Setting}/>
                </Switch>
              </AdminLayout>
            </Route>

            <Route>
              <FrontLayout>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/about' component={About}/>
                </Switch>
              </FrontLayout>
            </Route>

          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
