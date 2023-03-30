라이브러리 설치
```shell
$ npm install cross-env
$ npm install react-app-rewired
$ npm install serve
```

`.env` 파일 내용
```
REACT_APP_API_HOST_DEV = http://dev-api.myhost.com
REACT_APP_API_HOST_PRD = http://prd-api.myhost.com
```

EnvView.js
```javascript
    let apiHost = 'no profile';
    if (process.env.REACT_APP_BUILD_ENV === 'development') apiHost = process.env.REACT_APP_API_HOST_DEV;
    if (process.env.REACT_APP_BUILD_ENV === 'production') apiHost = process.env.REACT_APP_API_HOST_PRD;

    return (
        <div>
            <div>
                EnvView
            </div>
            <div>
                apiHost = {apiHost}
            </div>
        </div>
    );
```

`package.json`
```json
"scripts": {
    "env-dev": "cross-env REACT_APP_BUILD_ENV=development react-scripts start",
    "env-prd": "cross-env REACT_APP_BUILD_ENV=production react-scripts start",
},
```

개발 환경으로 실행
```
$ yarn env-dev
```

운영 환경으로 실행
```
$ yarn env-prd
```
