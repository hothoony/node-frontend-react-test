# container component pattern

## 구조
```
App.js
  UserCardContainer.js
    UserCardListComponent.js
      UserCardItemComponent.js
```

## App.js
```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <UserCardContainer/>
        <UserListContainer/>

      </header>
    </div>
  );
}
```

## UserCardContainer.js
- 데이터를 가져온다 (data fetching)
- 데이터를 UI Component 에 전달한다
```javascript
const loadUsers = () => {
    return users;
}

const UserCardContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const users = loadUsers();
        setUsers(users);
    }, []);

    return (
        <>
            <h3>UserCardContainer</h3>
            <UserCardListComponent users={users}/>
        </>
    );
}
```

## UserCardListComponent.js
- 데이터를 props 로 받는다 `{ users }`
- 사용자 카드 전체를 렌더링한다
```javascript
const UserCardListComponent = ({ users }) => {

    const onClickCard = (e) => {
        console.log('onClickCard', e);
    }

    return (
        <ul>
            {users.map(user => (
                <UserCardItemComponent user={user} key={user.userId} onClick={onClickCard}/>
            ))}
        </ul>
    );
}
```

## UserCardItemComponent.js
- 데이터를 props 로 받는다 `{ user }`
- 사용자 카드 하나를 렌더링한다
```javascript
const UserCardItemComponent = ({ user, onClick }) => {

    const {
        userId,
        name,
        gender,
        email
    } = user;

    return (
        <li onClick={onClick} id={userId + '_' + name}>
            <div>
                {userId}
            </div>
            <div>
                {name}
            </div>
            <div>
                {gender}
            </div>
            {/* <div>
                {email}
            </div> */}
        </li>
    );
}
```
