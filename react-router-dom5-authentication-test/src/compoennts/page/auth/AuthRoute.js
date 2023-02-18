import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import SignIn from './SignIn';

const AuthRoute = ({ component: Component, ...rest }) => {

    const isLogin = false;

    return (
        <>
            <Route
                {...rest}
                render={props => (
                    (isLogin) ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/auth/signin"/>
                        // <SignIn message={`require login > ${props.location.pathname}`}/>
                    )
                )}
            />
        </>
    );
}

export default AuthRoute;
