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

export default function LoginForm({ setToken }) {

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

    const formItem = {
        lineHeight: '40px',
    };
    const formLabel = {
        display: 'inline-block',
        width: '100px',
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={formItem}>
                <label>
                    <span style={formLabel}>Username</span>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </label>
            </div>
            <div style={formItem}>
                <label>
                    <span style={formLabel}>Password</span>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
            </div>
            <div style={formItem}>
                <label>
                    <span style={formLabel}></span>
                    <button type="submit">login</button>
                </label>
            </div>
        </form>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired,
}
