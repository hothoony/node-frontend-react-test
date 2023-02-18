import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './compoennts/menus/MainMenu';
import Home from './compoennts/page/Home';
import About from './compoennts/page/About';
import Contact from './compoennts/page/Contact';
import SignIn from './compoennts/page/auth/SignIn';
import Page404 from './compoennts/page/Page404';
import UserList from './compoennts/page/users/UserList';
import UserView from './compoennts/page/users/UserView';
import AuthRoute from './compoennts/page/auth/AuthRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Router with Authentication
        <BrowserRouter>
          <Menu></Menu>
          <div>
            <div>'/users' URI 는 로그인이 필요한 페이지</div>
            <div>나머지 URI 는 로그인이 필요없는 페이지</div>
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/auth/signin">
              <SignIn/>
            </Route>
            <AuthRoute exact path="/users" component={UserList}/>
            <AuthRoute exact path="/users/:userId" component={UserView}/>
            <Route path="*" component={Page404}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
