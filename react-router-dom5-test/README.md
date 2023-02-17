
## react-router-dom 설치
```shell
## 5버전 설치
npm install react-router-dom@5
```

## Router 사용 (react-router-dom 5버전)

- import
```javascript
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
```

- Router 설정
```javascript
<BrowserRouter>
    <Menu></Menu>
    <Switch>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<Join/>}></Route>
    </Routes>
</BrowserRouter>
```

- Link 설정
```javascript
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/signup">Join</Link></li>
</ul>
```

## 각 페이지 파일들
- `src/components/page/` 폴더 아래에 각 page 들을 만든다
