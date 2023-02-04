## array 를 렌더링할 때는 key 를 사용한다

- ArrayRender03_noComp_useKey.js
```javascript
// src/components/ArrayRender03_noComp_useKey.js

function ArrayRender03_noComp_useKey() {
    return (
        <div>
            <h3>ArrayRender03_noComp_useKey</h3>
            <div>
                {
                    dataList.map(item => {
                        return (
                            <div key={item.userId}>{/* key 를 사용 */}
                                <span>userId={item.userId}</span>
                                <span>, userName={item.userName}</span>
                                <span>, age={item.age}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
```

- ArrayRender04_useComp_useKey.js
```javascript
// src/compoenents/ArrayRender04_useComp_useKey.js

function User({user}) {
    return (
        <div>
            <span>userId={user.userId}</span>
            <span>, userName={user.userName}</span>
            <span>, age={user.age}</span>
        </div>
    );
}

function ArrayRender04_useComp_useKey() {
    return (
        <div>
            <h3>ArrayRender04_useComp_useKey</h3>
            <div>
                {
                    dataList.map(item => (
                        <User user={item} key={item.userId} /> /* key 를 사용 */
                    ))
                }
            </div>
        </div>
    );
}
```

- App.js
```javascript
// src/App.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
            {/* 
              key 를 사용하지 않으면 에러가 발생함
              => Warning: Each child in a list should have a unique "key" prop. 
            */}
        <ArrayRender01_noComp/>
        <ArrayRender02_useComp/>
        
            {/*
              key를 사용
            */}
        <ArrayRender03_noComp_useKey/>
        <ArrayRender04_useComp_useKey/>

      </header>
    </div>
  );
}
```
