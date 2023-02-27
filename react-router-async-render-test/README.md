## async 로 로딩하고 결과에 따라 다르게 렌더링하기

- 상태를 저장할 state 를 선언하고
```javascript
const [ tokenState, setTokenState ] = useState(0);
```

- state 에 따라 다르게 렌더링하도록 리턴한다
```javascript
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
```

### `TokenCheck.js`
```javascript
// TokenCheck.js

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
```
