
## `src/` 디렉토리 하위에 이미지가 있는 경우

- `import` 사용
```javascript
import logo from './logo.svg';

<img src={logo}/>
```

- `require` 사용
```javascript
<img src={ require('./logo.svg').default }/>
```
