import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Login from "./pages/Login";

const login = ({ success }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('로그인 성공');
            } else {
                reject('로그인 실패');
            }
        }, 1000);
    });
}

const loginCheck = async ({ success }) => {
    const res = await login({ success: success });
    return res;
}

const AuthRoute = ({ ...props }) => {

    const [ tokenState, setTokenState ] = useState(0);

    // useEffect(() => {

    //     (async () => {
    //         try {
    //             const res = await loginCheck({ success: true });
    //             console.log('res', res);
    //             setTokenState(1);
    //         } catch (err) {
    //             console.log('err', err);
    //             setTokenState(2);
    //         }
    //     })();

    // }, []);

    const onSuccess = () => {
        console.log('login success, please wait...');
        (async () => {
            try {
                const res = await loginCheck({ success: true });
                console.log('res', res);
                setTokenState(1);
            } catch (err) {
                console.log('err', err);
                setTokenState(2);
            }
        })();
    }

    const onFail = () => {
        console.log('login fail, please wait...');
        (async () => {
            try {
                const res = await loginCheck({ success: false });
                console.log('res', res);
                setTokenState(1);
            } catch (err) {
                console.log('err', err);
                setTokenState(2);
            }
        })();
    }

    return (
        <>
            {tokenState === 0 && <Loading onSuccess={onSuccess} onFail={onFail} />}
            {tokenState === 1 && <Route {...props} />}
            {tokenState === 2 && <Redirect to="/login" />}
        </>
    );
}

export default AuthRoute;

const Loading = ({ onSuccess, onFail }) => {
    return (
        <div>
            loading...
            <div>
                <button onClick={onSuccess}>login success</button>
                <button onClick={onFail}>login fail</button>
            </div>
        </div>
    );
}
