import React from "react";
import styles from "../styles/Nav.module.css";
import logo from '../assets/gochat.png';

import { Link } from "react-router-dom";

const Nav: React.FC<{}> = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt='logo' className={styles.logo}/>
            <h1>GoChat</h1>
            <ul className={styles.links}>
                <li className={styles.float_left}><Link to="/">Home</Link></li>
                <li className={styles.float_right}><Link to="/login">Login</Link></li>
                <li className={styles.float_right}><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;