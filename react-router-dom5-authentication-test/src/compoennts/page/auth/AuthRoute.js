import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignIn from './SignIn';

const AuthRoute = ({ component: Component, ...rest }) => {

    const isLogin = false;

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
                            // <SignIn message={`require login > ${props.location.pathname}`}/>
                        )
                    );
                }}
            />
        </>
    );
}

export default AuthRoute;
