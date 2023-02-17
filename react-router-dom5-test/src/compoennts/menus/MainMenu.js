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
                <li><Link to="/members/signup">Join</Link></li>
                <li><Link to="/members/signin">Sign-in</Link></li>
                <li><Link to="/etc">Etc</Link></li>
            </ul>
        </div>
    );
}

export default MainMenu;
