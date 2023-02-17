import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from '../../common/styles.js';

const PageMenu = () => {

    const navigate = useNavigate();

    const onClickJoin = () => {
        navigate('/members/signup');
    }

    const onClickSignin = () => {
        navigate('/members/signin');
    }

    return (
        <div style={styles.div}>
            <h3 style={styles.margin0}>MainMenu</h3>
            <ul style={styles.margin0}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about" replace={true}>About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a onClick={onClickJoin}>Join</a></li>
                <li><a onClick={onClickSignin}>Sign-in</a></li>
            </ul>
        </div>
    );
}

export default PageMenu;
