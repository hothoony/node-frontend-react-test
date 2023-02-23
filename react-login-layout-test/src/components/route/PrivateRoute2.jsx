import { Link, Redirect, Route, useHistory, useLocation } from "react-router-dom";

const PrivateRoute2 = ({ children, ...rest }) => {

    const location = useLocation();
    const history = useHistory();

    const isLogin = localStorage.getItem('isTestLogin');
    console.log('PrivateRoute2 isLogin', isLogin);

    console.log('isLogin', JSON.parse(isLogin), (JSON.parse(isLogin) === true));

    if (!JSON.parse(isLogin)) {
        history.replace(`/login?redirect=${location.pathname}`);
        return;
    }

    return (
        <Route
            {...rest}
            render={({ location }) => {

                // console.log('isLogin', JSON.parse(isLogin), (JSON.parse(isLogin) === true));

                // if (!JSON.parse(isLogin)) {
                //     history.replace(`/login?redirect=${location.pathname}`);
                //     return;
                // }

                return (
                    children
                );
            }}
        />
    );
};

export default PrivateRoute2;
