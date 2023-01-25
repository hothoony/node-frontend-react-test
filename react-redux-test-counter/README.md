## 프로젝트 생성
```
$ npx create-react-app react-redux-test-counter
```

## Redux 모듈 설치
```
$ npm install redux react-redux
```

## Redux 소스 코드

### Action
- store 변경시 사용할 action type 과
- action 객체를 반환할 action 생성 함수를 정의한다
```javascript
// src/redux/actions/countAction.js

// action type 을 정의한다
export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';
export const COUNT_RESET = 'COUNT_RESET';

// action 객체를 반환하는 action creator 함수를 정의한다
export const countUp = () => {
    console.log('');
    console.log('countAction.countUp');
    return {
        type: COUNT_UP,
    };
}

export const countDown = () => {
    console.log('');
    console.log('countAction.countDown');
    return {
        type: COUNT_DOWN,
    };
}

export const countUpBy = (state) => {
    console.log('');
    console.log('countAction.countUpBy', state);
    return {
        type: COUNT_UP,
        step: state.step,
    };
}

export const countDownBy = (state) => {
    console.log('');
    console.log('countAction.countDownBy', state);
    return {
        type: COUNT_DOWN,
        step: state.step,
    };
}

export const countReset = () => {
    console.log('');
    console.log('countAction.countReset');
    return {
        type: COUNT_RESET,
    }
}
```

### Reducer
- action 을 받아서 state 를 변경할 countReducer 를 만든다
- reducer 는 state 와 action 을 파라미터로 받는다
```javascript
// src/redux/reducers/countReducer.js

import { COUNT_UP, COUNT_DOWN, COUNT_RESET } from "../actions/countAction";

// 초기 state
const initialState = {
    count: 0,
};

export const countReducer = (state = initialState, action) => {
    console.log('');
    console.log('countReducer');
    console.log('state', state);
    console.log('action', action);

    let step;

    switch (action.type) {
        case COUNT_UP:
            step = (action.step) ?? 1;
            return {
                ...state,
                count: state.count + step,
            }
        case COUNT_DOWN:
            step = (action.step) ?? -1;
            return {
                ...state,
                count: state.count + step,
            }
        case COUNT_RESET:
            return {
                ...state,
                count: 0,
            }
        default:
            return state;
    }
}
```
- 여러 개의 reducer 를 합쳐서 하나의 rootReducer 로 만든다
```javascript
// src/redux/reducers/rootReducer.js

import { combineReducers } from "redux";
import { countReducer } from "./countReducer";

// 여러 개의 reducer 를 하나의 reducer 로 합쳐서 store 로 만든다
const rootReducer = combineReducers({
    count: countReducer,
});

export default rootReducer;
```

### Store
- rootReducer 로 store 를 생성한다
```javascript
// src/redux/store/store.js

import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
```

- 생성한 store 를 App 에 적용한다
```javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';  // 추가
import store from './redux/store/store'; // 추가

// console.log('store.state', store.state);
store.subscribe(() => {
  console.log('');
  console.log('store.subscribe');
  console.log('store', store);
  console.log('store.getState()', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* 추가 */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>              {/* 추가 */}
);

reportWebVitals();
```

## UI Component 소스 코드

### Redux store 변경하기
- Redux store 를 변경하기 위해 Action 을 dispatch 한다
- `useDispatch` 훅을 사용한다
```javascript
// src/components/CounterEdit.js

import { useDispatch } from "react-redux";
import { countDown, countDownBy, countReset, countUp, countUpBy } from "../redux/actions/countAction";

function CounterEdit() {

    const dispatch = useDispatch();

    const handleCountUp = () => {
        dispatch(countUp());
    }

    const handleCountDown = () => {
        dispatch(countDown());
    }

    const handleCountUpBy = () => {
        dispatch(countUpBy({step: 2}));
    }

    const handleCountDownBy = () => {
        dispatch(countDownBy({step: -2}));
    }

    const handleCountReset = () => {
        dispatch(countReset());
    }

    return (
        <div>
            <h2>CounterEdit</h2>
            <div>
                <button onClick={handleCountUp}>up</button>
                <button onClick={handleCountDown}>down</button>
            </div>
            <div>
                <button onClick={handleCountUpBy}>up by 2</button>
                <button onClick={handleCountDownBy}>down by -2</button>
            </div>
            <div>
            <button onClick={handleCountReset}>reset</button>
            </div>
        </div>
    );
}

export default CounterEdit;
```

### Redux Store 사용하기
- `useSelector` 훅을 사용한다
```javascript
// src/components/CounterView.js

import { useSelector } from "react-redux";

function CounterView() {

    const state = useSelector(store => store.count);
    const { count } = state;

    return (
        <div>
            <h2>CounterView</h2>
            <div>
                count = {count}
            </div>
        </div>
    );
}

export default CounterView;
```

- 생성한 UI Components 를 App 에 적용한다
```javascript
// src/App.js

import './App.css';
import CounterEdit from './components/CounterEdit';
import CounterView from './components/CounterView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Redux
        <CounterEdit/> {/* UI 적용 */}
        <CounterView/> {/* UI 적용 */}
      </header>
    </div>
  );
}

export default App;
```

## 프로젝트 실행
```
$ yarn start
```
