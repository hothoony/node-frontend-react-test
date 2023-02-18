import React from 'react';
import { useParams } from 'react-router-dom';

const UserView = () => {

    const { userId } = useParams();

    return (
        <div>
            <h1>UserView, userId={userId}</h1>
        </div>
    );
}

export default UserView;
