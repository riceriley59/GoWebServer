import React, { useEffect, useState } from "react";

import styles from "../styles/MessageBox.module.css";

import Message from "./Message";

const MessageBox: React.FC<{}> = () => {
    let ws = new WebSocket("ws://localhost:4500/api/ws");

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetchMessages();

        ws.onopen = () => {
            console.log("connected");
        }

        ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const mes = JSON.parse(evt.data)
            const newArray = [...data, mes]
            setData(newArray);
        }
    
        ws.onclose = () => {
            console.log('disconnected')
        }
    }, []);

    const fetchMessages = async () => {
        const response = await fetch('/api/message');

        if(response.ok){
            const messages = await response.json();
            console.log(messages);
            setData(messages);
        }
    }
    
    return (
        <div className={styles.container}>
            
        </div>
    );
}

export default MessageBox;