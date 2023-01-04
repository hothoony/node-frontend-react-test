## MEAN Stack vs MERN Stack

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

## react 개발환경 설정
- vscode plugin 설치
    - Simple React Snippets
- vscode config 수정
    - Emmet: Include Languages
- chrome 확장 프로그램
    - React Developer Tools 설치


## react 프로젝트 생성
```javascript
npx create-react-app example01
```

## react 프로젝트 실행
```javascript
// 로컬 실행
npm start
npm run start

// 프로덕션 빌드
npm run build

// serve 를 사용해서 build 디렉토리를 서버에서 실행한다
// serve 설치
//   npm install serve
npx serve -s build
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
```javascript
import { useState, useEffect } from "react";

// 매 랜더링시마다 호출
useEffect(() => {
    console.log('useEffect run every render');
    console.log(blogs);
});

// 최초 랜더링시에만 호출
useEffect(() => {
    console.log('useEffect run once');
}, []);

// name state 변경시에 호출
useEffect(() => {
    console.log('useEffect run on change name state');
}, [name]);
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

## json-server
- json 파일을 REAT API 로 서비스하는 간단한 서버
```bash
npx json-server --watch data/db.json --port 8000
```

## router 설치
```bash
## react-router-dom, 5 버전
npm install react-router-dom@5
```

## BrowserRouter
```javascript
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

<BrowserRouter>
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/blogs">
            <Blogs />
        </Route>
        <Route path="/blogs/:id">
            <BlogDetails />
        </Route>
    </Switch>
</BrowserRouter>
```
```javascript
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/blogs">Blogs</Link>
```

## useParams
```javascript
// App.js

<BrowserRouter>
    <Switch>
        <Route path="/blogs/:id">
            <BlogDetails />
        </Route>
    </Switch>
</BrowserRouter>
```
```javascript
// BlogDetails.js

import { useParams } from 'react-router-dom';

const { id } = useParams();
```

## fetch CRUD
```javascript
// Create
fetch('http;//localhost/blogs', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
})
.then(res => {

});
```
```javascript
// Read
fetch('http;//localhost/blogs', {
    method: 'GET',
})
.then(res => {
    return res.json();
})
.then(data => {

});
```
```javascript
// Update
fetch('http;//localhost/blogs/' + id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(params)
})
.then(res => {

});
```
```javascript
// Delete
fetch('http;//localhost/blogs/' + id, {
    method: 'DELETE',
})
.then(res => {

});
```

## redirect
```javascript
import { useHistory } from "react-router-dom";

const history = useHistory();
history.push('/blogs');
```
