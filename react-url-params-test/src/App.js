import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import UserList from './components/user/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        url params test

        <BrowserRouter>
          <Menu/>
          <Switch>
            <Route exact path='/users' component={UserList}/>
            <Route exact path='/users/:userId' component={UserDetail}/>
            <Route exact path='/users/:userId/edit' component={UserEdit}/>
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
