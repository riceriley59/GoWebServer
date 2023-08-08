import React, { FormEvent, useState, useEffect } from "react";

import styles from '../styles/Login.module.css';

const Login: React.FC<{}> = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const regex = new RegExp(/^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]/, "gm");
        setErrorMsg("")

        if(regex.test(name) && name){
            setErrorMsg((errorMsg) => errorMsg + "That isn't a valid username or email. ");
        }

        if(regex.test(password) && password){
            setErrorMsg((errorMsg) => errorMsg + "That isn't a valid password.");
        }
    }, [password, name]);

    const loginUser = () => {
        console.log("logged in");
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try{
            if(!errorMsg) {
                let response = await fetch("/api/login", {
                    method: "POST",
                    body: JSON.stringify({
                        username: name,
                        password: password,
                    })
                });

                let results = await response.json();

                if(response.status === 401){
                    setErrorMsg((errorMsg) => errorMsg + results.data);
                }else if(response.ok){
                    loginUser();
                }

                resetForm();
            }
        }catch(err){
            console.log(err);
        }   
    }

    const resetForm = () => {
        setName("");
        setPassword("");
        setErrorMsg("");
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className={styles.fields}>
                <label htmlFor="username">Username or Email: </label>
                <input id="username" type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="passwords">Password:</label>
                <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <input type="submit" value="Login" onClick={() => setErrorMsg("")}/>
            <p>{errorMsg}</p>
        </form>
    );
}

export default Login;