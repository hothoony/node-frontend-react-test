# `babel-plugin-root-import` 사용하기

## 사용준비

### 프로젝트 생성
```
$ npx create-react-app react-babel-plugin-root-import-test
```

### plugin 설치
```
$ npm install -D babel-plugin-root-import
$ npm install -D react-app-rewired
$ npm install -D customize-cra
```

### `package.json` 파일 수정
- `react-scripts` 를 `react-app-rewired` 로 변경
- 변경전
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
- 변경후
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

### `config-overrides.js` 파일 생성
```javascript
// PROJECT_ROOT/config-overrides.js

const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
    addBabelPlugins([
        "babel-plugin-root-import",
        {
            root: __dirname,
            rootPathPrefix: "~/",
            rootPathSuffix: "./src",
        }
    ])
);
```


## 사용하기
- `babel-plugin-root-import` 적용전
```javascript
// UserListContainer.js

import UserList from "../../components/user/UserList"; // 적용전에는 상대경로로 임포트

const UserListContainer = () => {
    return (
        <div>
            UserListContainer
            <UserList/>
        </div>
    );
}

export default UserListContainer;

```

- `babel-plugin-root-import` 적용전
```javascript
// UserListContainer.js

import UserList from "~/components/user/UserList"; // 적용후에는 절대경로로 임포트

const UserListContainer = () => {
    return (
        <div>
            UserListContainer
            <UserList/>
        </div>
    );
}

export default UserListContainer;
```
