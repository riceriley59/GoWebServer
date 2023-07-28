import React from "react";

import styles from "../styles/Message.module.css";

export interface Props {
    message: String;
    sender: Boolean;
}

const Message: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <p className={`${styles.message} ${props.sender ? styles.sent : styles.recieve}`}>{ props.message }</p>
        </div>
    );
}

export default Message;