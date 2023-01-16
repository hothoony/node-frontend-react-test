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

## selector
