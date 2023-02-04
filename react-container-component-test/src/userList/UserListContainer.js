import { useEffect, useState } from 'react';
import { users } from '../data/users.js';
import UserListComponent from './UserListComponent.js';

const loadUsers = () => {
    return users;
}

const UserListContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const users = loadUsers();
        setUsers(users);
    }, []);

    return (
        <>
            <h3>UserListContainer</h3>
            <UserListComponent users={users} />
        </>
    );
}

export default UserListContainer;
