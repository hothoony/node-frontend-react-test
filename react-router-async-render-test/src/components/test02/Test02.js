import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "./ AuthRoute";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

const Test02 = () => {
    return (
        <>
            <div>
                Test02
            </div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <AuthRoute exact path="/" component={Home} />
                    <AuthRoute exact path="/about" component={About} />
                    <AuthRoute exact path="/mypage" component={MyPage} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default Test02;
