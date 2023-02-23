import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const isLogin = localStorage.getItem('isTestLogin');

    const onHome = () => {
        history.push('/');
    }

    const onLogIn = () => {
        localStorage.setItem('isTestLogin', true);
        history.replace('/');
    }

    const onLogOut = () => {
        localStorage.removeItem('isTestLogin');
        history.replace('/');
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
