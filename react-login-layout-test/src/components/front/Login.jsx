import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    console.log('location', location);
    console.log('location.search', location.search);

    const searchParams = new URLSearchParams(location.search);
    console.log('searchParams', searchParams);
    console.log('redirect', searchParams.get('redirect'));

    const isLogin = localStorage.getItem('isTestLogin');

    const onHome = () => {
        history.push('/');
    }

    const onLogIn = () => {
        localStorage.setItem('isTestLogin', true);
        const redirect = searchParams.get('redirect') || '/';
        history.replace(redirect);
    }

    const onLogOut = () => {
        localStorage.removeItem('isTestLogin');
        const redirect = searchParams.get('redirect') || '/';
        history.replace(redirect);
    }

    useEffect(() => {
        console.log('useEffect isLogin =>', isLogin);
    }, [isLogin]);

    return (
        <div>
            <h1>Login page</h1>
            <div>isLogin = {isLogin}</div>
            <button onClick={onHome}>Home</button>
            <button onClick={onLogIn}>Log in</button>
            <button onClick={onLogOut}>Log out</button>
        </div>
    );
}

export default Login;
