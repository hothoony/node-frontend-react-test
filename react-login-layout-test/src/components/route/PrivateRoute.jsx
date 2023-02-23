import { Link, Redirect, Route, useHistory } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const isLogin = localStorage.getItem('isTestLogin');
    console.log('PrivateRoute isLogin', isLogin);

    const history = useHistory();

    return (
        <Route
            {...rest}
            render={({ location }) => {

                console.log('isLogin', JSON.parse(isLogin), (JSON.parse(isLogin) === true));

                if (!JSON.parse(isLogin)) {
                    history.replace(`/login?redirect=${location.pathname}`);
                    return;
                }

                return (
                    children
                );
            }}
        />
    );
};

export default PrivateRoute;
