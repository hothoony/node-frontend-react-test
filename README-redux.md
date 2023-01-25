# Redux
- redux 앱에는 단 하나의 저장소만 있어야 한다

# 구조
- View > Action > Reducer > Store > State > View

## Redux Tookit 설치
```shell
npm install @reduxjs/toolkit

yarn add @reduxjs/toolkit
```

## React Redux 앱 만들기
```bash
## redux 모듈로 react 앱을 생성
npx create-react-ap my-app --template redux

## redux 관련 라이브러리를 설치
npm install redux react-redux redux-actions redux-devtools-extension redux-logger
```

## 크롬 브라우저 웹스토어 확장 프로그램 설치
- Redux DevTools

## 파일 수정

- ### index.js 수정
```javascript
// src/index.js

// 아래 내용 추가
import logger from 'react-logger';
import rootReducer from './reducers';
import { configureStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware())
  : composeWithDevTools(applyMiddleware(logger));

const store = configureStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

- ### App.js
```javascript
```

## 용어

### 스토어 (Store)
- 앱의 상태 전부는 하나의 저장소(store) 안에 있는 객체 트리에 저장된다.

### 액션 (Action)
- 상태 트리를 변경하는 유일한 방법은 무엇이 일어날지 서술하는 객체인 액션(action)을 보내는 것 뿐이다
- 상태를 바로 변경하는 대신 액션이라는 객체를 통해 일어날 변경을 명시한다
- 상태 변화가 필요할 때 발생하는 하나의 객체
```javascript
{
    type: 'CHANGE_DATA', // 액션의 이름, type 필드 필수
    data: {
        id: 1,
        name: 'hello',
    }
}
```

### 액션 생성함수 (Action Creator)
- 액션 객체를 만들어주는 함수, 파라미터를 받아서 액션 객체로 만든다
```javascript
const addData = (data) => ({
    type: 'CHANGE_DATA',
    data: {
        id: 1,
        name: 'hello',
    }
})
```

### 리듀서 (Reducers)
- 액션이 상태 트리를 어떻게 변경할지 명시하기 위해 리듀서(reducers)를 작성해야 한다
- 각각의 액션이 전체 애플리케이션의 상태를 어떻게 변경할지 결정하는 특별한 함수인 리듀서를 작성한다
- 변화를 일으켜 새로운 상태를 반환하는 함수. state 와 action 을 파라미터로 받는다
```javascript
function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                value: state.value + 1,
            };
        default:
            return state;
    }
}
```

### 디스패치 (Dispatch)
- 스토어의 내장 함수이며 액션을 발생시킨다
```javascript
const onClick = (event) => {
    dispatch({
        type: 'ADD',
    })
}
```

### 구독 (Subscribe)
- 스토어의 내장 함수이며 action 이 dispatch 될 때마다 호출된다
```javascript
const listener = () => {

};
store.subscribe(listener);
```


View
    - 로그인 버튼 클릭
Action
    - state 를 변경하기 위해서는 action 을 dispatch 해야 한다
    - action 은 어떤 작업을 할지 설명해주는 자바스크립트 객체이다
    - type 속성이 필수
Dispatcher
    - action 을 실행
    - 데이터 이동 (action -> store)
Store
    - Middleware
        - Reducer 로 가기전 action 을 조작
    - Reducer
        - 데이터를 처리하는 부분
        - state 와 action 을 인자로 받는다
        - action 별로 state 를 어떻게 바꿀지 결정한다
        - reducer 에서 state 만 조작해서 정보를 표현해야 함
        - store 와 view 는 연결되어 있기 때문에 state 만 바꾸면 view 도 알아서 변경된다
    - 처리된 데이터를 view 로 전달
State
    - 데이터가 state
