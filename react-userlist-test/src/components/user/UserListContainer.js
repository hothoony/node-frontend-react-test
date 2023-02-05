import { useMemo, useRef, useState } from "react";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

function countActiveUsers(users) {
    console.log('=+> 활성 사용자를 세는 중...');
    return users.filter(user => user.active).length;
}

const UserListContainer = () => {

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });

    const { username, email } = inputs;
      
    const [users, setUsers] = useState([
        {userId: 1, username: 'user1', email: 'mail1@gmail.com', active: true},
        {userId: 2, username: 'user2', email: 'mail2@gmail.com', active: false},
        {userId: 3, username: 'user3', email: 'mail3@gmail.com', active: false},
    ]);

    const nextId = useRef(4);

    const handleAddUser = () => {

        const user = {
            userId: nextId.current,
            username,
            email,
        };
        setUsers([...users, user]);

        setInputs(prevState => ({
            username: '',
            email: '',
        }));
        nextId.current += 1;
    }

    const handleChangeAddUser = e => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value,
        }))
    };

    const onUserRemove = userId => {
        setUsers(users.filter(user => user.userId !== userId));
    }

    const onUserToggle = (userId) => {
        setUsers(
            users.map(user => (
                user.userId === userId ? {...user, active: !user.active} : user
            ))
        );
    }

    const handleDeleteAll = () => {
        setUsers([]);
    }

    // const count = countActiveUsers(users);
    const count = useMemo(() => countActiveUsers(users), [users]);
    
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

export default UserListContainer;
