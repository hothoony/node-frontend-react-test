import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div style={{border: '1px solid #111', padding: '20px 20px', marginTop: '20px'}}>
            <h3 style={{margin: '0'}}>Menu</h3>
            <ul style={{margin: '0'}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/members/signup">Join</Link></li>
                <li><Link to="/members/signin">Sign-in</Link></li>
            </ul>
        </div>
    );
}

export default Menu;
