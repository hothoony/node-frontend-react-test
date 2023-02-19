# Recoil
- A state management library for React
- 전역 shared state 관리


## react 프로젝트 생성

```shell
npx create-react-app
```

## recoil 라이브러리 설치

```shell
npm install recoil
```

## RecoilRoot 임포트

```javascript
// src/App.js

import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

function App() {
  return (
    <RecoilRoot>{/* RecoilRoot 추가 */}
      <div className="App">
        <header className="App-header">
          <div>React Recoil</div>
          <Page01 />
          <Page02 />
        </header>
      </div>
    </RecoilRoot>
  );
}
```

## Atom

- redux 에서 사용하는 store 와 유사
- atom 은 상태(state) 의 일부를 나타낸다
- atom 은 어떤 컴포넌트에서나 읽고 쓸 수 있다.
- atom 이 업데이트 되면 해당 atom 을 구독하고 있는 모든 컴포넌트들이 재 렌더링된다

```javascript
// atom 으로 state 를 정의한다
const loginState = atom({
    key: 'loginState',
    default: false,
});
```

### useRecoilState
```javascript
// useState 와 비슷하게 [값, set값] 를 반환한다
const [isLogin, setIsLogin] = useRecoilState(loginState);
```

### useRecoilValue
```javascript
// 값 만 필요한 경우에 사용
const isLogin = useRecoilValue(isLogin);
```

### useSetRecoilState
```javascript
// set 만 필요한 경우에 사용
const setIsLogin = useSetRecoilState(isLogin);
```

## Selector
- 읽기 전용 selector
- 읽기 쓰기 selector
