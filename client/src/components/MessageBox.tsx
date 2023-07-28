import React, { useState } from "react";

import styles from "../styles/MessageBox.module.css";

import Message from "./Message";

const MessageBox: React.FC<{}> = () => {
    const [data, setData] = useState([]);

    const fetchMessages = async () => {
        const response = await fetch('https://google.com');
        const messages = await response.json();

        return messages;
    }
    
    return (
        <div className={styles.container}>
            <Message message="Testing a long sentence just to see how this deals with really long sentences" sender={false} />
            <Message message="Testing" sender={true} />
            <Message message="Testing again" sender={false} />
        </div>
    );
}

export default MessageBox;