import { useEffect, useState } from 'react';
import { users } from '../data/users.js';
import UserCardListComponent from './UserCardListComponent';

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

export default UserCardContainer;
