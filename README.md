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

## react
- JAX 를 사용
- JAX 주석 `{/* 주석입력 */}`
```javascript
const MyButton = () => {

    // 주석입니다1

    return (
        // 주석입니다2
        <div>
            {/* 주석입니다3 */}
        </div>
    );
}
export default MyButton;

```

## 컴포넌트에 데이터 전달
- 컴포넌트에 데이터를 전달
```javascript
// 컴포넌트를 임포트하고
import Board from './components/Board';

function App() {
  return (
        {/* 애트리뷰트로 데이터를 전달한다 */}
        <Board title="제목1" content="내용1" />
  );
}
export default App;
```
- 컴포넌트에서 props 로 데이터를 전달받아 출력한다
```javascript
// props 파라미터를 정의하고
const Board = (props) => {
    
    // props 에서 title, content 파라미터를 꺼낸다
    let {title, content} = props;

    return (
        <div>
            <h1>Board</h1>
            <p>{title}</p>{/* props 에서 꺼낸 title 을 출력 */}
            <p>{content}</p>{/* props 에서 꺼낸 content 을 출력 */}
        </div>
    );
}
export default Board;
```

## 버튼 클릭 핸들러 등록
- 화살표 함수로 버튼 핸들러 등록
```javascript
const MyButton = () => {

    return (
        <div>
            {/* 화살표 함수로 버튼 핸들러 등록 */}
            <button onClick={() => { console.log('btn1 clicked'); }}>btn1</button>
        </div>
    );
}
export default MyButton;
```
- 버튼 핸들러 함수 정의후 버튼 이벤트에 연결
```javascript
const MyButton = () => {

    // 버튼 핸들러 함수 정의후
    const handleClick = () => {
        console.log('btn2 clicked');
    }

    return (
        <div>
            {/* 핸들러 함수를 버튼 이벤트에 연결 */}
            <button onClick={handleClick}>btn2</button>
        </div>
    );
}
export default MyButton;
```

## 데이터 바인딩
- 데이터 출력
```javascript
// { } 를 사용
let message = 'hello world';

<span>{message}</span>
```
- 이미지 출력
```javascript
// 이미지 파일을 먼저 임포트한다
import logo from './logo.png';

// 데이터 출려과 동일하게 { } 를 사용해서 출력
<img src={logo} />
```
- css class 출력
```javascript
// className 속성 사용
<div className={padding20px}>
```
- css inline style 적용
```javascript
<div style={ {color: 'blue', fontSize: '20px'} }>
```

## react 개발환경 설정
- vscode plugin 설치
    - Simple React Snippets
- vscode config 수정
    - Emmet: Include Languages
- chrome 확장 프로그램
    - React Developer Tools 설치


## react 프로젝트 생성
```shell
$ npx create-react-app example01
$ npm init react-app example01
$ yarn create react-app example01
```
```shell
## typescript 프로젝트로 생성
npx create-react-app example01 --template typescript
```

## react 프로젝트 실행
```javascript
// 로컬 실행
npm start
npm run start

// 프로덕션 빌드
npm run build

// serve 를 사용해서 build 디렉토리를 서버에서 실행한다
npm install serve // serve 설치
npx serve -s build
```

## useState

- ### 개요
    - state 는 변수 대신 사용할 수 있는 데이터 저장 공간
    - 데이터는 일반 변수에 넣거나 state 에 넣을 수 있다

- ### state 를 사용하는 이유
    - state 로 선언하면 값이 변경될 때 화면을 자동으로 랜더링한다
    - state 데이터가 변경되면 state 를 사용하는 화면이 자동으로 렌더링된다

- ### 사용법
```javascript
// useState 와 useEffect 를 임포트한다
import { useState, useEffect } from "react";

// const[변수명, set변수명] = useState(초기값);
const [variable, setVariable] = useState(value);
let [count, setCount] = useState(0);
let [dataList, setDataList] = useState([
    {no: 1, title: '제목1', content: '내용1'},
    {no: 2, title: '제목2', content: '내용2'},
    {no: 3, title: '제목3', content: '내용3'},
]);
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

## 버튼 클릭 핸들러
```javascript
<span onClick={ console.log('hello world'); }>
<span onClick={ increaseCount(); }>
<span onClick={ () => {} }>
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

## react + typescript 프로젝트 생성하기
```shell
npx create-react-app my-app --typescript
```
