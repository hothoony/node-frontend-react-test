# React Axios
- Axios is a promise-based HTTP Client for node.js

## 설치
```shell
npm install axios
```

## 사용법

- axios 임포트
```javascript
// axios 임포트
const axios = require('axios');
```

- GET
```javascript
axios.get('/user?id=123')
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
    .then(() => {
        console.log('finally');
    });

axios.get('/user', {
        params: {
            id: 123
        }
    })
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
    .then(() => {
        console.log('finally');
    });
```

- GET image
```javascript
axios({
    method: 'get',
    url: 'http://bit.ly/image123',
    responseType: 'stream',
})
.then(response => {
    response.data.pipe(fs.createWriteStream('cat.png'));
})
;
```

- async await 사용
```javascript
// async await 사용
async function getUser() {
    try {
        const response = await axios.get('/user?id=123');
    } catch (error) {
        console.log('error', error);
    } finally {
        console.log('finally');
    }
}
```

- POST
```javascript
axios.post('/user', {
        firstName: 'jason',
        lastName: 'momoa',
    })
    .then(response => {
        console.log('response', response);
    })
    .catch(error => {
        console.log('error', error);
    })
    .then(() => {
        console.log('finally');
    });
```

- axios config
```javascript
axios({
    method: 'post',
    url: '/user/123',
    data: {
        firstName: 'jason',
        lastName: 'momoa',
    }
});
```

- request method
```javascript
axios.request(config)
axios.get(url[, config])

axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])

axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
```

- cancel, AbortController
```javascript
const controller = new AbortController();

axios.get('/foo/bar', {
    signal: controller.signal
})
.then(response => {

});

controller.abort();
```

- `application/x-www-form-urlencoded` 방식으로 파라미터 전송
```javascript
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.get('/foo/bar', params);
```
