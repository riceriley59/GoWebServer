import React from "react";
import styles from "../styles/Nav.module.css";
import logo from '../assets/gochat.png';

const Nav: React.FC<{}> = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt='logo' className={styles.logo}/>
            <h1>GoChat</h1>
            <ul className={styles.links}>
                <li className={styles.float_left}><a>Home</a></li>
                <li className={styles.float_right}><a>Login</a></li>
                <li className={styles.float_right}><a>Sign Up</a></li>
            </ul>
        </nav>
    );
}

export default Nav;