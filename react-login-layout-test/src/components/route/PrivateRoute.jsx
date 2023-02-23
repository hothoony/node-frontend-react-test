import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const isLogin = localStorage.getItem('isTestLogin');
    console.log('PrivateRoute isLogin', isLogin);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                
                return (JSON.parse(isLogin) === true)
                ? (
                    children
                )
                : (
                    <Redirect
                        to={{
                            pathname: `/login?redirect=${location.pathname}`,
                            state: {from: location},
                        }}
                    />
                )
            }}
        />
    );
};

export default PrivateRoute;
