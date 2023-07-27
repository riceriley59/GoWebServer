import React from "react";

import styles from "../styles/Chat.module.css";
import { Link } from "react-router-dom";

const Chat: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text"></input>
            <Link className={styles.search} to="api/">Send</Link>
        </div>
    );
}

export default Chat;