import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../../common/styles.js';
import '../../common/styles.css'

const MainMenu = () => {

    return (
        <div style={styles.div}>
            <h3 style={styles.margin0}>MainMenu</h3>
            <ul style={styles.margin0} className='mainMenu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/auth/signin">Sign-in</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/users/1">User1</Link></li>
                <li><Link to="/users/2">User2</Link></li>
                <li><Link to="/no-page">No-Page</Link></li>
            </ul>
        </div>
    );
}

export default MainMenu;
