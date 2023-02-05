useState
useRef
useEffect
useMemo
useCallback
React.memo
useReducer

custom hook



## useMemo

- 특정 값을 재사용할 때 사용
- 참조하는 값이 변경될 때만 실행된다

- useMemo 적용전
```javascript
function countActiveUsers(users) {
    console.log('=+> 활성 사용자를 세는 중...');
    return users.filter(user => user.active).length;
}

function UserListContainer = () => {

    const count = countActiveUsers(users);

    return (
        <>
            <UserAdd
                username={username}
                email={email}
                onChange={handleChangeAddUser}
                onAddUser={handleAddUser}
            />
            <button onClick={handleDeleteAll}>모두 삭제</button>
            <UserList users={users} onUserRemove={onUserRemove} onUserToggle={onUserToggle} />
            <div>활성 사용자수 : {count}</div>
        </>
    );
}
```

- useMemo 적용후
```javascript
import { useMemo } from "react";

const count = useMemo(() => countActiveUsers(users), [users]);
```
