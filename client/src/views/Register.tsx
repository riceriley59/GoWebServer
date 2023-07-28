import React, { FormEvent } from "react";

import styles from '../styles/Register.module.css';

const Register: React.FC<{}> = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log("Submitted");
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Register</h1>

            <div className={styles.fields}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" />

                <label htmlFor="email">Email: </label>
                <input id="email" type="text" />

                <label htmlFor="passwords">Password:</label>
                <input id="password" type="text" />

                <label htmlFor="passwordRepeat">Repeat Password:</label>
                <input id="passwordRepeat" type="text" />
            </div>

            <input type="submit" value="Register" />
        </form>
    );
}

export default Register;