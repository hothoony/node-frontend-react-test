import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials),
    })
    .then(data => {
        console.log('data', data);
        return data.json();
    })
    .catch(err => {
        console.log('err', err);
    });
}

export default function Login({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // ID/PW : kminchelle / 0lelplR

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password,
        });
        setToken(token);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                <button type="submit">Submit</button>
            </label>
        </form>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
}
