import React from "react";

import styles from "../styles/MessageBox.module.css";

import Message from "./Message";

const MessageBox: React.FC<{}> = () => {
    
    
    return (
        <div className={styles.container}>
            <p className={styles.recieve}>test1</p>
            <p className={styles.sent}>test2</p>
            <p className={styles.recieve}>test3</p>
            <p className={styles.sent}>test4</p>
            <Message />
        </div>
    );
}

export default MessageBox;