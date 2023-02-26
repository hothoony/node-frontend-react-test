# useEffect 테스트

### 렌더링 될 때 마다 실행
```javascript
// [] 파라미터 없음
useEffect(() => {
    console.log('useEffect');
});
```

### 마운트 될 때 한번만 실행
```javascript
// [] 파라미터 추가
useEffect(() => {
    console.log('useEffect []');
    console.log('마운트 될 때 실행');
    return () => {
        console.log('언마운트 될 때 실행');
    };
}, []);
```

### 값이 변경될 때 실행
```javascript
// name 이 변경될 때 실행
useEffect(() => {
    console.log('useEffect [name]');
}, [name]);

// age 가 변경될 때 실행
useEffect(() => {
    console.log('useEffect [age]');
}, [age]);

// name 또는 age 가 변경될 때 실행
useEffect(() => {
    console.log('useEffect [name, age]');
}, [name, age]);
```
