## 프로젝트 생성
```shell
$ npx create-react-app react-redux-test
```

## redux 설치
```shell
$ npm install redux react-redux
```


## App 에 redux store 적용 (index.js)

- `index.js` 변경전
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

- `index.js` 변경후
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import 추가
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Provider 추가
// Provider 로 App 을 감싸준다
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
```

## Presentational Components
- 리덕스 스토어에 직접 접근하지 않고 필요한 값이나 함수를 props 로 받아와서 사용한다
- src/components/Counter.js

## Container Components
- 리덕스 스토어의 상태를 조회하거나 액션을 디스패치할 할 수 있는 컴포넌트를 말한다
- HTML 태그를 직접 사용하지 않고 Presentational Components 를 사용해서 화면을 그린다
- src/containers/CounterContainer.js

# useSelector, useDispatch 훅 사용하는 경우 아래 항목은 잘 사용하지 않음
- Presentational Components
  - mapStateToProps
- Container Components
  - mapDispatchToProps

## useSelector
- store 에 저장된 state 를 참조하는 hook 이다 (mapStateToProps 와 유사)

## useDispatch
- dispatch 함수를 실행하는 hook 이다 (mapDispatchToProps 와 유사)

## combineReducers
- reducers 를 묶어서 하나의 reducer 로 만들어준다
