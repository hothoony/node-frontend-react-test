# Redux 테스트

## 프로젝트 생성
```shell
$ npm init
```

## redux 설치
```shell
$ npm install redux
```

## index.js 파일 생성
- `src/index.js`
```javascript
// import
const { createStore } = require('redux');

// state(data)
const baseState = { name: 'paul' }

// action
const actionChangeName = (newname) => {
    const action = {
        type: 'CHANGE_NAME',
        payload: newname
    };
    console.log('dispatch action', action);
    return action;
}

// reducer
const postReducer = (state = baseState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
    }
}

// store 생성
const store = createStore(postReducer);

// state 변경전
console.log('state before', store.getState());

// state 변경하기 (dispatch action)
store.dispatch(actionChangeName('cindy'));

// state 변경후
console.log('state after ', store.getState());

```

## index.js 파일 실행
```shell
$ node src/index.js
```
```javascript
// console
state before { name: 'paul' }
dispatch action { type: 'CHANGE_NAME', payload: 'cindy' }
state after  { name: 'cindy' }
```
