import React, { useState, useEffect, FormEvent } from "react";

import styles from '../styles/Register.module.css';

const Register: React.FC<{}> = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        setErrorMsg("");

        if(emailRegex.test(email) === false && email){
            setErrorMsg((errorMsg) => errorMsg + "That isn't a valid email address. ");
        }

        if (password !== repeatPassword && password && repeatPassword){
            setErrorMsg((errorMsg) => errorMsg + "Your passwords don't match. ");
        }
    }, [password, repeatPassword, name, email]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setErrorMsg("");

        try{
            if(!errorMsg) {
                let response = await fetch("/api/register", {
                    method: "POST",
                    body: JSON.stringify({
                        username: name,
                        password: password,
                        email: email,
                    })
                });

                let results = await response.json();

                if(!response.ok){
                    setErrorMsg((errorMsg) => errorMsg + results.data)
                }

                resetForm();
            }
        }catch (err: any) {
            console.log(err)
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

            <input type="submit" value="Register" onClick={() => setErrorMsg("")} />
            <p>{ errorMsg }</p>
        </form>
    );
}

export default Register;