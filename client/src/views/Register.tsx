import React, { useState } from "react";

import styles from '../styles/Register.module.css';

const Register: React.FC<{}> = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    let validInputs = false;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try{
            if(validInputs) {
                let response = await fetch("/api/create/user", {
                    method: "POST",
                    body: JSON.stringify({
                        username: name,
                        password: password,
                        email: email,
                    })
                });

                resetForm();
            }
        }catch (err: any) {
            console.log(err)
        }
    }

    const validateForm = () => {
        validInputs = true;
        setErrorMsg("");

        if(emailRegex.test(email) === false){
            setErrorMsg(errorMsg + "That isn't a valid email address. ");
            validInputs = false;
        }

        if (password !== repeatPassword){
            setErrorMsg(errorMsg + "Your passwords don't match. ");
            validInputs = false;
        }
    }

    const resetForm = () => {
        setName("");
        setPassword("");
        setEmail("");
        setRepeatPassword("");
        setErrorMsg("");
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Register</h1>

            <div className={styles.fields}>
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>

                <label htmlFor="email">Email: </label>
                <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="passwords">Password:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label htmlFor="passwordRepeat">Repeat Password:</label>
                <input id="passwordRepeat" type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
            </div>

            <input type="submit" value="Register" onClick={validateForm} />
            <p>{ errorMsg }</p>
        </form>
    );
}

export default Register;