import React from "react";

import MessageBox from "./MessageBox";
import Chat from "./Chat";

import styles from "../styles/Messages.module.css";

const Messages: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.messages}>
                <MessageBox />
            </div>
            <div className={styles.chat}>
                <Chat />
            </div>
        </div>
    );
}

export default Messages;