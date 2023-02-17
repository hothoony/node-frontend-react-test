import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './compoennts/menus/MainMenu';
import Home from './compoennts/page/Home';
import About from './compoennts/page/About';
import Contact from './compoennts/page/Contact';
import Join from './compoennts/page/signup/Join';
import SignIn from './compoennts/page/members/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Router
        <BrowserRouter>
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/members/signup">
              <Join/>
            </Route>
            <Route path="/members/signin">
              <SignIn/>
            </Route>
            <Route path="/etc">
              <div>기타 페이지</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
