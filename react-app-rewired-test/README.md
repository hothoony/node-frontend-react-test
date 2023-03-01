## `react-app-rewired` 설치
```bash
$ npm install -D react-app-rewired
$ npm install -D customize-cra
```

## package.json 수정
- `react-scripts` 을 `react-app-rewired` 로 수정

- 수정전
```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

- 수정후
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

## `config-overrides.js` 추가
```javascript
const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addWebpackAlias({
        "@components": path.resolve(__dirname, "src", "components"),
        "@customTypes": path.resolve(__dirname, "src", "types")
    })
);
```

## 프로젝트 실행
```bash
$ yarn start
```
