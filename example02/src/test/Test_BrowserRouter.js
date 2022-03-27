import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlogDetail from '../comp/BlogDetail';
import Blogs from '../comp/Blogs';
import Create from '../comp/Create';
import Home from '../comp/Home';

const Test_BrowserRouter = () => {
    return (
        <div>
            <h1>Test_BrowserRouter</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route exact path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/blogs/:id">
                        <BlogDetail />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
 
export default Test_BrowserRouter;
