import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './compoennts/menus/MainMenu';
import Home from './compoennts/page/Home';
import About from './compoennts/page/About';
import Contact from './compoennts/page/Contact';
import SignUp from './compoennts/page/sign/SignUp';
import SignIn from './compoennts/page/sign/SignIn';
import Page404 from './compoennts/page/Page404';
import UserList from './compoennts/page/users/UserList';
import UserView from './compoennts/page/users/UserView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Router with Authentication
        <BrowserRouter>
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/auth/signup">
              <SignUp/>
            </Route>
            <Route exact path="/auth/signin">
              <SignIn/>
            </Route>

            {/* <Route exact path="/users" component={UserList}>
              <Route path=":userId" component={UserView}/>
            </Route> */}

            <Route exact path="/users" component={UserList}></Route>
            <Route exact path="/users/:userId" component={UserView}/>
            
            <Route path="*" component={Page404}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
