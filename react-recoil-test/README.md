# Recoil
- 전역 shared state 관리


## react 프로젝트 생성
```shell
npx create-react-app
```

## recoil 설치
```shell
npm install recoil
```

## RecoilRoot 임포트
```javascript
// App.js

import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

function App() {
    return (
        <RecoilRoot>
        </RecoilRoot>
    );
}
```

## atom
```javascript
// atom 으로 state 를 정의한다
const todoListState = atom({
    key: 'todoListState',
    default: [],
});

// useRecoilState
// useState 와 비슷하게 [값, set값] 를 반환한다
const [todoList, setTodoList] = useRecoilState(todoListState);

// useRecoilValue
// 값만 필요한 경우에 사용
const todoList = useRecoilValue(todoListState);

// useSetRecoilState
// set값 만 필요한 경우에 사용
const setTodoList = useSetRecoilState(todoListState);
```

## selector
- 읽기 전용 selector
- 읽기 쓰기 selector
