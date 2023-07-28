import React, { FormEvent } from "react";

import styles from '../styles/Login.module.css';

const Login: React.FC<{}> = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("Submitted");
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className={styles.fields}>
                <label htmlFor="username">Username or Email: </label>
                <input id="username" type="text" />

                <label htmlFor="passwords">Password:</label>
                <input id="password" type="text" />
            </div>

            <input type="submit" value="Login" />
        </form>
    );
}

export default Login;