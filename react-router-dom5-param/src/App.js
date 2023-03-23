import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import PostEdit from './components/PostEdit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Learn React

        <BrowserRouter>

          <ul>Menu
            <li><Link to="/">Home</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/:postId/edit" component={PostEdit} />
          </Switch>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
