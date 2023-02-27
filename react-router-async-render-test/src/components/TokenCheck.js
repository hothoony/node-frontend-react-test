import { useEffect, useState } from "react";

const login = ({ success }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve({
                    status: 200,
                    message: 'login ok',
                });
            } else {
                reject({
                    status: 400,
                    message: 'login fail',
                });
            }
        }, 1000);
    });
}

const TokenCheck = () => {

    const [ tokenState, setTokenState ] = useState(0);

    useEffect(() => {
        login({
            success: false,
        })
        .then(res => {
            console.log('login res', res);
            setTokenState(1);
        })
        .catch(err => {
            console.log('login err', err);
            setTokenState(2);
        });
    }, []);

    return (
        <>
            <div>
                TokenCheck
            </div>
            {(tokenState === 0) && <div>token loading and check</div>}
            {(tokenState === 1) && <div>valid token</div>}
            {(tokenState === 2) && <div>invalid token</div>}
        </>
    );
}

export default TokenCheck;
