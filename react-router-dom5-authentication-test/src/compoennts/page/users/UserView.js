import React from 'react';
import { useParams } from 'react-router-dom';
import LoginInfo from '../auth/LoginInfo';

const UserView = () => {

    const { userId } = useParams();

    return (
        <div>
            <h1>UserView, userId={userId}</h1>
            <LoginInfo/>
        </div>
    );
}

export default UserView;
