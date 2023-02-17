import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { styles } from '../../common/styles.js';

const PageMenu = () => {

    const history = useHistory();

    const onClickLink = (e) => {
        e.preventDefault();
        console.log('onClickLink');
        history.push('/contact');
    }

    const onClickJoin = () => {
        history.push('/members/signup');
    }

    const onClickSignin = () => {
        history.replace('/members/signin');
    }

    return (
        <div style={styles.div}>
            <h3 style={styles.margin0}>PageMenu</h3>
            <ul style={styles.margin0}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about" replace={true}>About</Link></li>
                <li><Link to="/contact" onClick={onClickLink}>Contact</Link></li>
                <li><a href='' onClick={onClickJoin}>Join</a></li>
                <li><a onClick={onClickSignin}>Sign-in</a></li>
                <li><Link to="/etc">Etc</Link></li>
            </ul>
        </div>
    );
}

export default PageMenu;
