import Navbar from './comp/Navbar';
import Home from './comp/Home';
import TestCustomHook from './comp/TestCustomHook';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './comp/Create';
import BlogDetail from './comp/BlogDetail';

function App2() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <TestCustomHook />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App2;
