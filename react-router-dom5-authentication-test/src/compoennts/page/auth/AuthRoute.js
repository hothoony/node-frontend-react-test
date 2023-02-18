import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {

    return (
        <>
            <Route
                {...rest}
                render={props => {
                    const isLogin = JSON.parse(localStorage.getItem('isLogin'));
                    return (
                        (isLogin) ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to={`/auth/signin?redirect=${props.location.pathname}`}/>
                        )
                    );
                }}
            />
        </>
    );
}

export default AuthRoute;
