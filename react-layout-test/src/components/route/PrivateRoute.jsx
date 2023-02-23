import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                
                const isAuth = false;

                return isAuth === true
                ? (
                    children
                )
                : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location},
                        }}
                    />
                )
            }}
        />
    );
};

export default PrivateRoute;
