import React, { MouseEvent, useEffect, useState, useRef } from "react";

import styles from "../styles/Chat.module.css";

const Chat: React.FC<{}> = () => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const useAutosizeTextArea = (
        textAreaRef: HTMLTextAreaElement | null,
        value: string
    ) => {
        useEffect(() => {
            if (textAreaRef) {
                textAreaRef.style.height = "0px";
                const scrollHeight = textAreaRef.scrollHeight;

                textAreaRef.style.height = scrollHeight + "px";
            }
          }, [textAreaRef, value]);
    }

    useAutosizeTextArea(textAreaRef.current, value);

    const sendMessage = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        console.log(value);

        if(textAreaRef.current){
            textAreaRef.current.value = "";
        }
    }

    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
    
        setValue(val);
    };

    return (
        <div className={styles.container}>
            <textarea
                className={styles.input} 
                onChange={handleChange}
                placeholder="Type your message here"
                ref={textAreaRef}
                rows={1}
                value={value}
            />

            <button className={styles.search} onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chat;