import React from "react";

import MessageBox from "./MessageBox";
import Chat from "./Chat";

import styles from "../styles/Messages.module.css";

const Messages: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <div>
                <Chat />
            </div>
            <div>
                <MessageBox />
            </div>
        </div>
    );
}

export default Messages;