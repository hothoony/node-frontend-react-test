## Tech Stack

### MEAN Stack
- `M`ongoDB
- `E`xpress.js
- `A`ngular
- `N`ode.js

### MERN Stack
- `M`ongoDB
- `E`xpress.js
- `R`eact
- `N`ode.js

## vscode 설정
- ### plugin 설치
    - Simple React Snippets
- ### config 수정
    - Emmet: Include Languages

## chrome 확장 프로그램 설치
- ### React Developer Tools 설치


## react app 생성
```
npx create-react-app example01
```

## 로컬에서 실행
```
npm start
```

## useState
- ### 개요
    - state 로 선언하면 값 변경시 화면을 자동으로 랜더링한다

- ### import
```javascript
import { useState, useEffect } from "react";

const [variable, setVariable] = useState(value);
```

- ### blogs 배열을 state로 선언
```javascript
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'item1', body: 'body1'},
        { id: 2, title: 'item2', body: 'body2'},
        { id: 3, title: 'item3', body: 'body3'},
    ]);

    // 변경시
    setBlogs(newBlogs);
```
- ### name 문자열을 state로 선언
```javascript
    const [name, setName] = useState('james');

    // 변경시
    setName('new name');
```

## useEffect
- ### 개요
    - 랜더링시마다 호출된다
- ### import 추가
```javascript
import { useState, useEffect } from "react";
```
- ### 매 랜더링시마다 호출한다
```javascript
    useEffect(() => {
        console.log('use effect run');
        console.log(blogs);
    });
```
- ### 최초 랜더링시에만 호출한다
```javascript
    useEffect(() => {
        console.log('use effect run');
        console.log(blogs);
    }, []);
```
- ### name state 변경시에만 호출한다
```javascript
    useEffect(() => {
        console.log('use effect run');
        console.log(blogs);
        console.log(name);
    }, [name]);
```

## json-server
```
npx json-server --watch data/db.json --port 8000
```

## react-router-dom 설치
- ### 5 버전 설치
```
npm install react-router-dom@5
```

## router 설정
- ### a 태그를 Link 컴포넌트로 변경한다
```javascript
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/create">New Blog</Link>
```

## useEffect clean up
- Router 를 적용하는 경우 fetch 동작 중에 다른 링크로 넘어가게 되면 에러가 발생하는데 이런 경우에 fetch 동작을 중지시킨다
- AbortController 를 사용
```javascript
const useFetch = (url) => {

    useEffect(() => {
        const abortCont = new AbortController(); // here

        fetch(url, {signal: abortCont.signal}) // here
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') return; // here
                setError(err.message);
            });

        return () => abortCont.abort(); // here
    }, [url]);

    return { data, isPending, error };
}
```

create component
event handling
state
hook
fetch
custom hook
error handling
router
route parameter
