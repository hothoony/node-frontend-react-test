# Parent 컴포넌트와 Child 컴포넌트 간에 데이터 전달

### Parent.js
```javascript
// src/components/Parent.js
const Parent = () => {

    let [ data, setData ] = useState({
        name: 'james',
        age: 20,
    });

    const onChangeChildData = (data) => {
        console.log('onChangeChildData', data);
        setData(data);
    };

    return (
        <div>
            <h1>Parent</h1>
            <div>
                <span>{data.name}, {data.age}</span>
            </div>
            <div>
                <Child 
                    /* Child 컴포넌트에 데이터를 전달한다 */
                    name={data.name} age={data.age} 
                    /* Child 컴포넌트에서 데이터를 받는다 */
                    onChildChange={onChangeChildData} />
            </div>
        </div>
    );
};
```

### Child.js
```javascript
// src/components/Child.js
const Child = (props) => {

    // Parent 컴포넌트에서 데이터를 받는다
    let { name, age, onChildChange } = props;

    const passToParent = () => {
        let data = {
            name: 'paul',
            age: 30,
        };
        console.log('passToParent', data);

        // Parent 컴포넌트에 데이터를 전달한다
        onChildChange(data);
    };

    return (
        <div>
            <h1>Child</h1>
            <div>
                <span>{name}, {age}</span>
            </div>
            <div>
                <button onClick={passToParent}>Child 에서 데이터를 변경하고 Parent 로 전달</button>
            </div>
        </div>
    );
};
```
