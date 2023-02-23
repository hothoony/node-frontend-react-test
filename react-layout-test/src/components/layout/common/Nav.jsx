import React from "react";
import { Link } from "react-router-dom";
import '../../../style/style.css';

const Nav = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/admin'>Dashboard</Link>
                </li>
                <li>
                    <Link to='/admin/setting'>Setting</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
