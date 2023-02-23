
## state 변경 확인하기

- `setName(e.target.value);` 로 state 를 변경하고
- 바로 다음 라인에서 변경한 state 를 확인해 보면 변경된 state 의 내용이 확인되지 않는다
```javascript
// src/components/StateTest01.js

const onChangeName = (e) => {
    console.log('');
    console.log('## onChangeName');
    console.log('name', name); // 변경 전에 state 를 먼저 출력하고
    setName(e.target.value);   // 여기서 state 를 변경하지만
    console.log('name', name); // 여기서는 변경된 state 가 확인되지 않는다
}
```

```javascript
<label>
    <span style={formLabel}>name</span>
    <input type="text" value={name} onChange={onChangeName}/>
</label>
```


## `useEffect` 로 state 변경내용 확인하기
- `useEffect` 로 해당 state 를 설정하고, state 가 변경되면 `useEffect` 안에서 변경된 내용을 확인한다
```javascript
// src/components/StateTest01.js

useEffect(() => {
    console.log('## useEffect nmae => changed', name);
}, [name]);
```
